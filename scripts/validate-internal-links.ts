#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import puppeteer from 'puppeteer';

interface LinkIssue {
  file: string;
  snippet: string;
  offendingUrl: string;
}

interface DOMIssue {
  page: string;
  anchorText: string;
  href: string;
  trailingSlash: boolean;
}

interface RedirectIssue {
  url: string;
  status: number;
  redirected: boolean;
  finalUrl: string;
}

interface CanonicalIssue {
  page: string;
  canonical: string;
  trailingSlashOk: boolean;
}

class LinkValidator {
  private staticIssues: LinkIssue[] = [];
  private astIssues: LinkIssue[] = [];
  private domIssues: DOMIssue[] = [];
  private redirectIssues: RedirectIssue[] = [];
  private canonicalIssues: CanonicalIssue[] = [];
  private smartLinkUsage: string[] = [];

  private isInternalUrl(url: string): boolean {
    if (!url) return false;
    if (url.startsWith('/') && !url.startsWith('//')) return true;
    const match = url.match(/^https?:\/\/(?:www\.)?(elgietherapy\.com)/);
    return !!match;
  }

  private hasTrailingSlash(url: string): boolean {
    try {
      const urlObj = new URL(url.startsWith('/') ? `https://elgietherapy.com${url}` : url);
      const pathname = urlObj.pathname;
      return pathname !== '/' && pathname.endsWith('/');
    } catch {
      return false;
    }
  }

  private isAssetUrl(url: string): boolean {
    const assetExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.css', '.js', '.ico', '.webp', '.gif'];
    return assetExtensions.some(ext => url.toLowerCase().includes(ext));
  }

  private scanSourceFiles(): void {
    const sourceFiles = this.getSourceFiles('./src');
    
    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      this.scanFileContent(file, content);
      this.scanAST(file, content);
    }
  }

  private getSourceFiles(dir: string): string[] {
    const files: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...this.getSourceFiles(fullPath));
      } else if (entry.isFile() && /\.(tsx?|jsx?)$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  private scanFileContent(file: string, content: string): void {
    // Regex patterns for different link formats
    const patterns = [
      /href=["']([^"']+)["']/g,
      /to=["']([^"']+)["']/g,
      /"([^"]*\/[^"]*?)"/g, // Generic quoted URLs ending with /
      /'([^']*\/[^']*?)'/g   // Generic single-quoted URLs ending with /
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const url = match[1];
        if (this.isInternalUrl(url) && !this.isAssetUrl(url) && this.hasTrailingSlash(url)) {
          const lineNumber = content.substring(0, match.index).split('\n').length;
          const line = content.split('\n')[lineNumber - 1];
          
          this.staticIssues.push({
            file: path.relative(process.cwd(), file),
            snippet: `Line ${lineNumber}: ${line.trim()}`,
            offendingUrl: url
          });
        }
      }
    }
  }

  private scanAST(file: string, content: string): void {
    try {
      const ast = parse(content, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });

      traverse(ast, {
        JSXAttribute: (path) => {
          const name = path.node.name;
          if (t.isJSXIdentifier(name) && (name.name === 'href' || name.name === 'to')) {
            const value = path.node.value;
            let url = '';

            if (t.isStringLiteral(value)) {
              url = value.value;
            } else if (t.isJSXExpressionContainer(value) && t.isStringLiteral(value.expression)) {
              url = value.expression.value;
            }

            if (url && this.isInternalUrl(url) && !this.isAssetUrl(url) && this.hasTrailingSlash(url)) {
              const loc = path.node.loc;
              const lineNumber = loc?.start.line || 0;
              
              this.astIssues.push({
                file: path.relative(process.cwd(), file),
                snippet: `Line ${lineNumber}: ${name.name}="${url}"`,
                offendingUrl: url
              });
            }
          }
        }
      });
    } catch (error) {
      console.warn(`Could not parse ${file}: ${error}`);
    }
  }

  private checkSmartLinkUsage(): void {
    const componentFiles = ['src/components/Navbar.tsx', 'src/components/Footer.tsx'];
    
    for (const file of componentFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        if (content.includes('SmartLink') || content.includes('normalizeUrl')) {
          this.smartLinkUsage.push(`${file}: ✅ Uses SmartLink or normalizeUrl`);
        } else {
          this.smartLinkUsage.push(`${file}: ❌ No SmartLink or normalizeUrl usage found`);
        }
      }
    }
  }

  private async runDOMSweep(): Promise<void> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const testPages = [
      '/',
      '/child-therapist-park-city',
      '/teen-therapist-park-city',
      '/insurance-fees'
    ];

    for (const testPage of testPages) {
      try {
        await page.goto(`http://localhost:8080${testPage}`, { waitUntil: 'networkidle0' });
        
        // Check canonical tags
        const canonical = await page.evaluate(() => {
          const canonicalEl = document.querySelector('link[rel="canonical"]');
          return canonicalEl ? (canonicalEl as HTMLLinkElement).href : null;
        });

        if (canonical) {
          const hasTrailing = this.hasTrailingSlash(canonical);
          this.canonicalIssues.push({
            page: testPage,
            canonical,
            trailingSlashOk: !hasTrailing || canonical.endsWith('/')
          });
        }

        // Sweep DOM for anchors
        const anchors = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href]'));
          return links.map(link => ({
            href: (link as HTMLAnchorElement).href,
            text: link.textContent?.trim() || '',
            pathname: new URL((link as HTMLAnchorElement).href).pathname
          }));
        });

        for (const anchor of anchors) {
          if (this.isInternalUrl(anchor.href) && !this.isAssetUrl(anchor.href)) {
            const hasTrailing = this.hasTrailingSlash(anchor.href);
            if (hasTrailing) {
              this.domIssues.push({
                page: testPage,
                anchorText: anchor.text,
                href: anchor.href,
                trailingSlash: hasTrailing
              });
            }
          }
        }

      } catch (error) {
        console.warn(`Could not test page ${testPage}: ${error}`);
      }
    }

    await browser.close();
  }

  private async runRedirectAudit(): Promise<void> {
    // Collect unique internal URLs from previous scans
    const urls = new Set<string>();
    
    [...this.staticIssues, ...this.astIssues].forEach(issue => {
      if (this.isInternalUrl(issue.offendingUrl)) {
        urls.add(issue.offendingUrl);
      }
    });

    this.domIssues.forEach(issue => {
      urls.add(issue.href);
    });

    // Test each URL for redirects
    for (const url of Array.from(urls).slice(0, 20)) { // Limit to 20 for performance
      try {
        const testUrl = url.startsWith('/') ? `http://localhost:8080${url}` : url;
        const response = await fetch(testUrl, { method: 'HEAD', redirect: 'manual' });
        
        this.redirectIssues.push({
          url,
          status: response.status,
          redirected: response.status >= 300 && response.status < 400,
          finalUrl: response.headers.get('location') || url
        });
      } catch (error) {
        console.warn(`Could not test URL ${url}: ${error}`);
      }
    }
  }

  private generateReport(): string {
    let report = '# Internal Link Validation Report\n\n';

    // Static scan results
    report += '## Static Scan Results\n\n';
    if (this.staticIssues.length === 0) {
      report += '✅ No static trailing slash issues found.\n\n';
    } else {
      report += '| File | Code Snippet | Offending URL |\n';
      report += '|------|--------------|---------------|\n';
      this.staticIssues.forEach(issue => {
        report += `| ${issue.file} | ${issue.snippet} | ${issue.offendingUrl} |\n`;
      });
      report += '\n';
    }

    // AST scan results
    report += '## AST Scan Results\n\n';
    if (this.astIssues.length === 0) {
      report += '✅ No AST trailing slash issues found.\n\n';
    } else {
      report += '| File | Code Snippet | Offending URL |\n';
      report += '|------|--------------|---------------|\n';
      this.astIssues.forEach(issue => {
        report += `| ${issue.file} | ${issue.snippet} | ${issue.offendingUrl} |\n`;
      });
      report += '\n';
    }

    // DOM sweep results
    report += '## DOM Sweep Results\n\n';
    if (this.domIssues.length === 0) {
      report += '✅ No DOM trailing slash issues found.\n\n';
    } else {
      report += '| Page | Anchor Text | Href | Trailing Slash? |\n';
      report += '|------|-------------|------|----------------|\n';
      this.domIssues.forEach(issue => {
        report += `| ${issue.page} | ${issue.anchorText} | ${issue.href} | ${issue.trailingSlash ? '❌' : '✅'} |\n`;
      });
      report += '\n';
    }

    // Redirect audit results
    report += '## Redirect Audit Results\n\n';
    if (this.redirectIssues.length === 0) {
      report += '✅ No URLs tested for redirects.\n\n';
    } else {
      report += '| URL | Status | Redirected? | Final URL |\n';
      report += '|-----|--------|-------------|----------|\n';
      this.redirectIssues.forEach(issue => {
        report += `| ${issue.url} | ${issue.status} | ${issue.redirected ? '❌' : '✅'} | ${issue.finalUrl} |\n`;
      });
      report += '\n';
    }

    // Canonical check results
    report += '## Canonical Tag Check\n\n';
    if (this.canonicalIssues.length === 0) {
      report += '✅ No canonical tag issues found.\n\n';
    } else {
      report += '| Page | Canonical | Trailing Slash OK? |\n';
      report += '|------|-----------|-------------------|\n';
      this.canonicalIssues.forEach(issue => {
        report += `| ${issue.page} | ${issue.canonical} | ${issue.trailingSlashOk ? '✅' : '❌'} |\n`;
      });
      report += '\n';
    }

    // SmartLink usage
    report += '## SmartLink/Normalize Usage\n\n';
    this.smartLinkUsage.forEach(usage => {
      report += `${usage}\n`;
    });
    report += '\n';

    // Summary
    report += '## Summary\n\n';
    const totalIssues = this.staticIssues.length + this.astIssues.length + this.domIssues.length + 
                       this.redirectIssues.filter(r => r.redirected).length + 
                       this.canonicalIssues.filter(c => !c.trailingSlashOk).length;

    const passed = totalIssues === 0;
    report += `**Status: ${passed ? 'PASS ✅' : 'FAIL ❌'}**\n\n`;
    report += `- Static scan issues: ${this.staticIssues.length}\n`;
    report += `- AST scan issues: ${this.astIssues.length}\n`;
    report += `- DOM sweep issues: ${this.domIssues.length}\n`;
    report += `- Redirect issues: ${this.redirectIssues.filter(r => r.redirected).length}\n`;
    report += `- Canonical issues: ${this.canonicalIssues.filter(c => !c.trailingSlashOk).length}\n`;

    if (!passed) {
      report += '\n## Fix List\n\n';
      [...this.staticIssues, ...this.astIssues].forEach(issue => {
        report += `- ${issue.file}: Update ${issue.offendingUrl} to remove trailing slash\n`;
      });
    }

    return report;
  }

  async run(): Promise<void> {
    console.log('🔍 Running internal link validation...\n');

    console.log('📂 Scanning source files...');
    this.scanSourceFiles();

    console.log('🔗 Checking SmartLink usage...');
    this.checkSmartLinkUsage();

    console.log('🌐 Running DOM sweep (requires dev server on :8080)...');
    try {
      await this.runDOMSweep();
    } catch (error) {
      console.warn('⚠️  DOM sweep failed. Make sure dev server is running on port 8080.');
    }

    console.log('↩️  Running redirect audit...');
    try {
      await this.runRedirectAudit();
    } catch (error) {
      console.warn('⚠️  Redirect audit failed. Make sure dev server is running on port 8080.');
    }

    console.log('\n📊 Generating report...\n');
    const report = this.generateReport();
    console.log(report);

    // Write report to file
    fs.writeFileSync('link-validation-report.md', report);
    console.log('💾 Report saved to link-validation-report.md');
  }
}

// Run validation
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new LinkValidator();
  validator.run().catch(console.error);
}