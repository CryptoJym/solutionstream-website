# SolutionStream Website - Testing Guide

This guide explains how to test the website locally and run automated tests before deployment.

---

## Quick Start

```bash
# 1. Start local server (if not already running)
cd solutionstream.com
python3 -m http.server 8000

# 2. In another terminal, run quick tests
cd ..
node test_site_quick.js

# 3. For comprehensive tests (requires npm install first)
npm install
npm test
```

---

## Test Scripts

### 1. Quick Test (test_site_quick.js)

**Use when**: You want fast verification without installing dependencies

**What it tests**:
- Critical pages load (index, contact, services, company)
- Marketing copy is present
- Stats section updated
- Contact form header updated
- Company page updated
- Meta descriptions
- Critical assets exist

**How to run**:
```bash
node test_site_quick.js
```

**Expected output**:
```
🧪 Quick Website Tests

✓ index.html loads
✓ contact.html loads
✓ services.html loads
✓ company.html loads
✓ Homepage hero copy updated
✓ Stats section updated with impact metrics
✓ Contact form header updated
✓ Company page about section updated
✓ Homepage meta description updated
✓ Asset: css/style.css
✓ Asset: js/app.min.js
✓ Asset: assets/logos/solutionstream-logo-horz.svg

Results: 12 passed, 0 failed
```

---

### 2. Comprehensive Test (test_site.js)

**Use when**: Pre-deployment verification, testing after code changes

**What it tests**:
- All 8 critical pages load
- All marketing copy changes (16 tests)
- All meta descriptions (4 tests)
- All internal navigation links (11 tests)
- All image assets (7 tests)
- Contact form structure (5 tests)
- CSS/JS resources (2 tests)

**How to run**:
```bash
# First time only
npm install

# Run tests
npm test
```

**Expected output**:
```
🧪 SolutionStream Website Test Suite

📄 Testing Page Loads...
  ✓ index.html loads successfully
  (8 tests)

📝 Testing Marketing Copy Changes...
  ✓ index.html: "We've Been Building Software for 28 Years..." found
  (16 tests)

🏷️  Testing Meta Descriptions...
  ✓ index.html: Meta description updated correctly
  (4 tests)

🔗 Testing Internal Navigation Links...
  Found 11 unique internal HTML links to test
  ✓ services.html is valid
  (11 tests)

🖼️  Testing Image Assets...
  ✓ assets/logos/solutionstream-logo-horz.svg exists
  (7 tests)

📋 Testing Forms...
  ✓ Contact form exists
  (5 tests)

📦 Testing CSS and JavaScript Resources...
  ✓ css/style.css exists (209.49 KB)
  (2 tests)

============================================================
TEST SUMMARY
============================================================

✓ Passed: 53
✗ Failed: 0
⚠ Warnings: 0
Total Tests: 53

Pass Rate: 100.0%
```

---

## Manual Testing Checklist

While automated tests cover functionality, manual testing ensures visual quality:

### Visual Testing

1. **Start local server**:
   ```bash
   cd solutionstream.com
   python3 -m http.server 8000
   ```

2. **Open browser**: http://localhost:8000

3. **Check each page**:

#### Homepage (index.html)
- [ ] Hero headline: "We've Been Building Software for 28 Years. Here's What That Looks Like."
- [ ] Hero copy mentions Young Living, SeneGence, Modere with specific numbers
- [ ] Positioning line: "We're not flashy. We're reliable."
- [ ] Service cards have real client examples (not generic claims)
- [ ] Stats section shows: $2B, 10X, 28, 100% with context
- [ ] Footer CTA: "Ready to Build Something That Scales?"
- [ ] No broken images
- [ ] Mobile layout looks good

#### Contact Page (contact.html)
- [ ] Header: "Let's Talk About Your Project"
- [ ] Subtext includes "No sales pitch. No pressure."
- [ ] Typo fixed: "we'll get back to soon" should be "within one business day"
- [ ] Form displays correctly
- [ ] All form fields present (name, email, phone, message)

#### Company Page (company.html)
- [ ] Section header: "We've Been Doing This Since 1997"
- [ ] Copy mentions Young Living $2B, SeneGence 500K, Modere 13 markets
- [ ] Positioning: "We're not the flashiest agency. We're the one that sticks around."
- [ ] Culture section displays correctly
- [ ] Images load

#### Services Page (services.html)
- [ ] Meta description mentions specific outcomes
- [ ] Service pages link correctly

### Cross-Browser Testing (Optional)

Test in multiple browsers to ensure compatibility:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)

### Mobile Responsive Testing

Test on mobile devices or use browser dev tools:
```
Chrome DevTools: Cmd+Opt+I (Mac) or F12 (Windows)
Toggle Device Toolbar: Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
```

Test these viewports:
- [ ] iPhone SE (375px width)
- [ ] iPhone 12/13 Pro (390px width)
- [ ] iPad (768px width)
- [ ] Desktop (1920px width)

---

## Understanding Test Results

### Pass Rate
- **100%**: Perfect! Ready to deploy
- **95-99%**: Review failed tests, likely minor issues
- **90-94%**: Fix failed tests before deploying
- **Below 90%**: Do not deploy, investigate failures

### Common Test Failures

#### "Server not running on port 8000"
**Solution**: Start the local server first
```bash
cd solutionstream.com
python3 -m http.server 8000
```

#### "Page loads: HTTP 404"
**Problem**: Page file doesn't exist or path is wrong
**Solution**: Check that the HTML file exists in `solutionstream.com/` directory

#### "Marketing copy missing"
**Problem**: Copy changes weren't saved or wrong branch
**Solution**:
- Verify you're on `vercel-marketing-launch` branch: `git branch`
- Check file was saved correctly
- Re-read the file to confirm changes

#### "Asset not found"
**Problem**: Image or CSS/JS file missing
**Solution**: Check file exists in `solutionstream.com/assets/` directory

#### "Internal link broken"
**Problem**: Link points to non-existent page
**Solution**: Fix the href in the HTML file or create the missing page

---

## Creating New Tests

To add new tests, edit `test_site.js` or `test_site_quick.js`:

### Example: Test for new marketing copy

```javascript
// In test_site_quick.js
await test('New feature copy present', async () => {
  const { body } = await fetchURL(`${BASE_URL}/index.html`);
  if (!body.includes('Your new copy here')) {
    throw new Error('New copy not found');
  }
});
```

### Example: Test for new page

```javascript
// In test_site.js - add to pages array in testPageLoads()
const pages = [
  'index.html',
  'contact.html',
  'your-new-page.html'  // Add here
];
```

---

## Continuous Integration (Future Enhancement)

To run tests automatically on every commit:

### GitHub Actions Example

Create `.github/workflows/test.yml`:

```yaml
name: Website Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: python3 -m http.server 8000 &
      - run: sleep 2
      - run: npm test
```

This will run tests on every push and pull request automatically.

---

## Before Every Deployment

Run this checklist:

```bash
# 1. Ensure you're on the right branch
git branch
# Should show: * vercel-marketing-launch

# 2. Start server if not running
cd solutionstream.com && python3 -m http.server 8000 &
cd ..

# 3. Run quick tests
node test_site_quick.js

# 4. If quick tests pass, run comprehensive tests
npm test

# 5. Review results
# If 100% pass rate, proceed to deployment
# If failures, fix issues and re-test
```

---

## Troubleshooting

### Port 8000 Already in Use

**Error**: `OSError: [Errno 48] Address already in use`

**Solution 1**: Kill existing server
```bash
lsof -ti:8000 | xargs kill -9
```

**Solution 2**: Use different port
```bash
python3 -m http.server 8001
# Update BASE_URL in test scripts to http://localhost:8001
```

### Tests Fail After Code Changes

1. **Review what changed**: `git diff`
2. **Check if test expectations are outdated**: Update test assertions if copy changed intentionally
3. **Verify files saved**: Sometimes editors don't auto-save
4. **Clear browser cache**: Old files might be cached

### jsdom Installation Fails

**Problem**: npm install fails for jsdom

**Solution**: Use quick test instead
```bash
node test_site_quick.js
# Quick test has no dependencies
```

---

## Testing Metrics

### Performance Benchmarks

For production deployment, consider testing:

```bash
# Lighthouse CI (requires installation)
npx lighthouse http://localhost:8000 --view

# Target scores:
# Performance: >90
# Accessibility: >90
# Best Practices: >90
# SEO: >90
```

### Load Time Testing

```bash
# Using curl
time curl -s http://localhost:8000/index.html > /dev/null

# Should complete in < 1 second locally
```

---

## Summary

**Before any deployment**:
1. ✅ Start local server
2. ✅ Run `npm test` (or `node test_site_quick.js`)
3. ✅ Verify 100% pass rate
4. ✅ Manual visual check in browser
5. ✅ Ready to deploy!

**Quick Commands**:
```bash
# Start server
cd solutionstream.com && python3 -m http.server 8000

# Run tests (in another terminal)
npm test

# Quick test (no dependencies)
node test_site_quick.js
```

---

For detailed test results, see: **TEST_RESULTS.md**

For deployment instructions, see: **VERCEL_DEPLOY.md**
