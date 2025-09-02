#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

interface LinkIssue {
  file: string;
  snippet: string;
  offendingUrl: string;
}

class QuickLinkValidator {
  private staticIssues: LinkIssue[] = [];
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
      // For relative URLs, check if they end with / but aren't just /
      return url !== '/' && url.endsWith('/') && !url.includes('?') && !url.includes('#');
    }
  }

  private isAssetUrl(url: string): boolean {
    const assetExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.css', '.js', '.ico', '.webp', '.gif', '.pdf'];
    return assetExtensions.some(ext => url.toLowerCase().includes(ext));
  }

  private scanSourceFiles(): void {
    const sourceFiles = this.getSourceFiles('./src');
    
    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      this.scanFileContent(file, content);
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
    const lines = content.split('\n');
    
    // Look for common patterns
    const patterns = [
      /href=["']([^"']+)["']/g,
      /to=["']([^"']+)["']/g,
    ];

    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      const line = lines[lineNumber];
      
      for (const pattern of patterns) {
        let match;
        pattern.lastIndex = 0; // Reset regex
        while ((match = pattern.exec(line)) !== null) {
          const url = match[1];
          if (this.isInternalUrl(url) && !this.isAssetUrl(url) && this.hasTrailingSlash(url)) {
            this.staticIssues.push({
              file: path.relative(process.cwd(), file),
              snippet: `Line ${lineNumber + 1}: ${line.trim()}`,
              offendingUrl: url
            });
          }
        }
      }
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

  private generateReport(): string {
    let report = '# Internal Link Validation Report (Quick Scan)\n\n';

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

    // SmartLink usage
    report += '## SmartLink/Normalize Usage\n\n';
    this.smartLinkUsage.forEach(usage => {
      report += `${usage}\n`;
    });
    report += '\n';

    // Summary
    report += '## Summary\n\n';
    const totalIssues = this.staticIssues.length;
    const smartLinkOk = this.smartLinkUsage.every(usage => usage.includes('✅'));

    const passed = totalIssues === 0 && smartLinkOk;
    report += `**Status: ${passed ? 'PASS ✅' : 'FAIL ❌'}**\n\n`;
    report += `- Static scan issues: ${this.staticIssues.length}\n`;
    report += `- SmartLink usage: ${smartLinkOk ? 'OK' : 'Issues found'}\n`;

    if (!passed) {
      report += '\n## Fix List\n\n';
      this.staticIssues.forEach(issue => {
        report += `- ${issue.file}: Update ${issue.offendingUrl} to remove trailing slash\n`;
      });
    }

    return report;
  }

  run(): void {
    console.log('🔍 Running quick internal link validation...\n');

    console.log('📂 Scanning source files...');
    this.scanSourceFiles();

    console.log('🔗 Checking SmartLink usage...');
    this.checkSmartLinkUsage();

    console.log('\n📊 Generating report...\n');
    const report = this.generateReport();
    console.log(report);

    // Write report to file
    fs.writeFileSync('quick-link-validation-report.md', report);
    console.log('💾 Report saved to quick-link-validation-report.md');
  }
}

// Run validation
const validator = new QuickLinkValidator();
validator.run();