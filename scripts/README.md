# Internal Link Validation Script

This script validates that all internal links in the codebase have been properly normalized without trailing slashes (except the homepage `/`).

## Prerequisites

1. Make sure the dev server is running on port 8080:
   ```bash
   npm run dev -- --port 8080
   ```

2. Install tsx if not already available:
   ```bash
   npm install tsx
   ```

## Running the Validation

```bash
npx tsx scripts/validate-internal-links.ts
```

Or if you have tsx installed globally:
```bash
tsx scripts/validate-internal-links.ts
```

## What it Checks

- **Static Scan**: Source files for hardcoded trailing slashes
- **AST Analysis**: React Link and anchor props with trailing slashes  
- **DOM Sweep**: Runtime check of rendered anchors on key pages
- **Redirect Audit**: HTTP requests to verify no unwanted redirects
- **Canonical Tags**: Ensures canonical URLs don't have trailing slashes
- **SmartLink Usage**: Confirms normalization utilities are used in Nav/Footer

## Output

The script outputs a detailed markdown report to the console and saves it as `link-validation-report.md`.

**PASS** means all internal links are properly normalized.
**FAIL** includes a fix list with specific files and lines to update.