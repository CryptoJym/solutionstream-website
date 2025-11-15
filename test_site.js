#!/usr/bin/env node

/**
 * SolutionStream Website Testing Suite
 *
 * Tests:
 * 1. All HTML pages load successfully
 * 2. All internal navigation links are valid
 * 3. All image paths exist
 * 4. Modified marketing copy is present
 * 5. No broken links
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const BASE_URL = 'http://localhost:8000';
const SITE_DIR = path.join(__dirname, 'solutionstream.com');

// Test results tracking
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: []
};

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function addResult(test, status, message) {
  results.tests.push({ test, status, message });
  if (status === 'PASS') results.passed++;
  else if (status === 'FAIL') results.failed++;
  else if (status === 'WARN') results.warnings++;
}

// Fetch URL helper
function fetchURL(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({ status: res.statusCode, body: data });
        } else {
          reject(new Error(`Status ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

// Test 1: Page Load Tests
async function testPageLoads() {
  log('\n📄 Testing Page Loads...', 'cyan');

  const pages = [
    'index.html',
    'contact.html',
    'services.html',
    'company.html',
    'work.html',
    'blog.html',
    'solutionmap.html',
    'privacy-policy.html'
  ];

  for (const page of pages) {
    try {
      const { status } = await fetchURL(`${BASE_URL}/${page}`);
      if (status === 200) {
        log(`  ✓ ${page} loads successfully`, 'green');
        addResult(`Page Load: ${page}`, 'PASS', `HTTP ${status}`);
      }
    } catch (error) {
      log(`  ✗ ${page} failed to load: ${error.message}`, 'red');
      addResult(`Page Load: ${page}`, 'FAIL', error.message);
    }
  }
}

// Test 2: Marketing Copy Verification
async function testMarketingCopy() {
  log('\n📝 Testing Marketing Copy Changes...', 'cyan');

  const tests = [
    {
      page: 'index.html',
      contains: [
        "28 Years Building Software That Scales",
        "Full-time teams that ship reliable, scalable software, backed by $2B revenue growth and 10X user scaling for our clients.",
        "We're not flashy. We're reliable",
        "$2B",
        "client revenue growth (Young Living)",
        "10X",
        "user scaling (SeneGence: 50K → 500K)",
        "100%",
        "full-time employees, not contractors"
      ]
    },
    {
      page: 'contact.html',
      contains: [
        "Let's Talk About Your Project",
        "No sales pitch",
        "honest feedback"
      ]
    },
    {
      page: 'company.html',
      contains: [
        "We've Been Doing This Since 1997",
        "We're not the flashiest agency",
        "We're the one that sticks around"
      ]
    },
    {
      page: 'services.html',
      contains: [
        "Software development, technical staffing, AI solutions"
      ]
    }
  ];

  for (const test of tests) {
    try {
      const { body } = await fetchURL(`${BASE_URL}/${test.page}`);

      for (const phrase of test.contains) {
        if (body.includes(phrase)) {
          log(`  ✓ ${test.page}: "${phrase.substring(0, 50)}..." found`, 'green');
          addResult(`Marketing Copy: ${test.page}`, 'PASS', `Found: ${phrase.substring(0, 30)}...`);
        } else {
          log(`  ✗ ${test.page}: Missing "${phrase}"`, 'red');
          addResult(`Marketing Copy: ${test.page}`, 'FAIL', `Missing: ${phrase}`);
        }
      }
    } catch (error) {
      log(`  ✗ ${test.page} could not be tested: ${error.message}`, 'red');
      addResult(`Marketing Copy: ${test.page}`, 'FAIL', error.message);
    }
  }
}

// Test 3: Internal Links
async function testInternalLinks() {
  log('\n🔗 Testing Internal Navigation Links...', 'cyan');

  try {
    const { body } = await fetchURL(`${BASE_URL}/index.html`);
    const dom = new JSDOM(body);
    const links = Array.from(dom.window.document.querySelectorAll('a[href]'));

    const internalLinks = links
      .map(link => link.getAttribute('href'))
      .filter(href => {
        // Filter for internal HTML links
        return href &&
               !href.startsWith('http') &&
               !href.startsWith('//') &&
               !href.startsWith('#') &&
               !href.startsWith('mailto:') &&
               !href.startsWith('tel:') &&
               href.endsWith('.html');
      });

    const uniqueLinks = [...new Set(internalLinks)];

    log(`  Found ${uniqueLinks.length} unique internal HTML links to test`, 'blue');

    for (const link of uniqueLinks) {
      try {
        await fetchURL(`${BASE_URL}/${link}`);
        log(`  ✓ ${link} is valid`, 'green');
        addResult(`Internal Link: ${link}`, 'PASS', 'Link resolves');
      } catch (error) {
        log(`  ✗ ${link} is broken: ${error.message}`, 'red');
        addResult(`Internal Link: ${link}`, 'FAIL', error.message);
      }
    }
  } catch (error) {
    log(`  ✗ Could not test links: ${error.message}`, 'red');
    addResult('Internal Links', 'FAIL', error.message);
  }
}

// Test 4: Image Assets
async function testImageAssets() {
  log('\n🖼️  Testing Image Assets...', 'cyan');

  const criticalImages = [
    'assets/logos/solutionstream-logo-horz.svg',
    'assets/logos/solutionstream-logo-white-horz.svg',
    'assets/theme/app-icons/favicon.ico',
    'assets/company/events-primary.jpg',
    'assets/company/events-secondary.jpg',
    'assets/company/events-3.jpg',
    'assets/company/events-3-2.jpg'
  ];

  for (const imagePath of criticalImages) {
    const fullPath = path.join(SITE_DIR, imagePath);
    if (fs.existsSync(fullPath)) {
      log(`  ✓ ${imagePath} exists`, 'green');
      addResult(`Image Asset: ${imagePath}`, 'PASS', 'File exists');
    } else {
      log(`  ✗ ${imagePath} missing`, 'red');
      addResult(`Image Asset: ${imagePath}`, 'FAIL', 'File not found');
    }
  }
}

// Test 5: Meta Descriptions
async function testMetaDescriptions() {
  log('\n🏷️  Testing Meta Descriptions...', 'cyan');

  const pages = [
    { page: 'index.html', shouldContain: '28 years building software that scales' },
    { page: 'contact.html', shouldContain: 'Get honest feedback about your project' },
    { page: 'services.html', shouldContain: 'Software development, technical staffing, AI solutions' },
    { page: 'company.html', shouldContain: '28 years building platforms that scale' }
  ];

  for (const test of pages) {
    try {
      const { body } = await fetchURL(`${BASE_URL}/${test.page}`);
      const dom = new JSDOM(body);
      const metaDesc = dom.window.document.querySelector('meta[name="description"]');

      if (metaDesc) {
        const content = metaDesc.getAttribute('content');
        if (content && content.includes(test.shouldContain)) {
          log(`  ✓ ${test.page}: Meta description updated correctly`, 'green');
          addResult(`Meta Description: ${test.page}`, 'PASS', content.substring(0, 50) + '...');
        } else {
          log(`  ✗ ${test.page}: Meta description doesn't contain expected text`, 'red');
          addResult(`Meta Description: ${test.page}`, 'FAIL', 'Missing expected content');
        }
      } else {
        log(`  ⚠ ${test.page}: No meta description found`, 'yellow');
        addResult(`Meta Description: ${test.page}`, 'WARN', 'No meta tag');
      }
    } catch (error) {
      log(`  ✗ ${test.page}: Could not test meta description`, 'red');
      addResult(`Meta Description: ${test.page}`, 'FAIL', error.message);
    }
  }
}

// Test 6: Form Elements
async function testForms() {
  log('\n📋 Testing Forms...', 'cyan');

  try {
    const { body } = await fetchURL(`${BASE_URL}/contact.html`);
    const dom = new JSDOM(body);

    const form = dom.window.document.querySelector('form');
    if (form) {
      log('  ✓ Contact form exists', 'green');
      addResult('Contact Form', 'PASS', 'Form element found');

      // Check for critical form fields
      const fields = ['name', 'email', 'phone', 'message'];
      fields.forEach(field => {
        const input = form.querySelector(`[name*="${field}"], #${field}, .${field}`);
        if (input) {
          log(`  ✓ Form field "${field}" exists`, 'green');
          addResult(`Contact Form Field: ${field}`, 'PASS', 'Field exists');
        } else {
          log(`  ⚠ Form field "${field}" might be missing`, 'yellow');
          addResult(`Contact Form Field: ${field}`, 'WARN', 'Field not clearly identified');
        }
      });
    } else {
      log('  ✗ Contact form not found', 'red');
      addResult('Contact Form', 'FAIL', 'Form element missing');
    }
  } catch (error) {
    log(`  ✗ Could not test form: ${error.message}`, 'red');
    addResult('Contact Form', 'FAIL', error.message);
  }
}

// Test 7: CSS and JS Resources
async function testResources() {
  log('\n📦 Testing CSS and JavaScript Resources...', 'cyan');

  const resources = [
    'css/style.css',
    'js/app.min.js'
  ];

  for (const resource of resources) {
    const fullPath = path.join(SITE_DIR, resource);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      log(`  ✓ ${resource} exists (${(stats.size / 1024).toFixed(2)} KB)`, 'green');
      addResult(`Resource: ${resource}`, 'PASS', `${(stats.size / 1024).toFixed(2)} KB`);
    } else {
      log(`  ✗ ${resource} missing`, 'red');
      addResult(`Resource: ${resource}`, 'FAIL', 'File not found');
    }
  }
}

// Summary Report
function printSummary() {
  log('\n' + '='.repeat(60), 'cyan');
  log('TEST SUMMARY', 'cyan');
  log('='.repeat(60), 'cyan');

  log(`\n✓ Passed: ${results.passed}`, 'green');
  log(`✗ Failed: ${results.failed}`, 'red');
  log(`⚠ Warnings: ${results.warnings}`, 'yellow');
  log(`Total Tests: ${results.tests.length}`, 'blue');

  const passRate = ((results.passed / results.tests.length) * 100).toFixed(1);
  log(`\nPass Rate: ${passRate}%`, passRate >= 90 ? 'green' : passRate >= 70 ? 'yellow' : 'red');

  if (results.failed > 0) {
    log('\n❌ FAILED TESTS:', 'red');
    results.tests
      .filter(t => t.status === 'FAIL')
      .forEach(t => log(`  • ${t.test}: ${t.message}`, 'red'));
  }

  if (results.warnings > 0) {
    log('\n⚠️  WARNINGS:', 'yellow');
    results.tests
      .filter(t => t.status === 'WARN')
      .forEach(t => log(`  • ${t.test}: ${t.message}`, 'yellow'));
  }

  log('\n' + '='.repeat(60) + '\n', 'cyan');

  // Exit with error code if tests failed
  process.exit(results.failed > 0 ? 1 : 0);
}

// Main test runner
async function runTests() {
  log('\n🧪 SolutionStream Website Test Suite', 'cyan');
  log('Testing marketing improvements on vercel-marketing-launch branch\n', 'blue');

  try {
    await testPageLoads();
    await testMarketingCopy();
    await testMetaDescriptions();
    await testInternalLinks();
    await testImageAssets();
    await testForms();
    await testResources();
  } catch (error) {
    log(`\n❌ Test suite error: ${error.message}`, 'red');
    process.exit(1);
  }

  printSummary();
}

// Check if server is running
http.get(BASE_URL, () => {
  runTests();
}).on('error', () => {
  log('❌ Server is not running on port 8000', 'red');
  log('Please start the server first:', 'yellow');
  log('  cd solutionstream.com && python3 -m http.server 8000\n', 'yellow');
  process.exit(1);
});
