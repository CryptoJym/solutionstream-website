#!/usr/bin/env node

/**
 * Quick Website Test Suite (No Dependencies)
 * Tests basic functionality without external packages
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:8000';
const SITE_DIR = path.join(__dirname, 'solutionstream.com');

let passed = 0;
let failed = 0;

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function fetchURL(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function test(name, fn) {
  try {
    await fn();
    log(`✓ ${name}`, 'green');
    passed++;
  } catch (error) {
    log(`✗ ${name}: ${error.message}`, 'red');
    failed++;
  }
}

async function runTests() {
  log('\n🧪 Quick Website Tests\n', 'cyan');

  // Test 1: Critical pages load
  const pages = ['index.html', 'contact.html', 'services.html', 'company.html'];
  for (const page of pages) {
    await test(`${page} loads`, async () => {
      const { status } = await fetchURL(`${BASE_URL}/${page}`);
      if (status !== 200) throw new Error(`HTTP ${status}`);
    });
  }

  // Test 2: Marketing copy present on homepage
  await test('Homepage hero copy updated', async () => {
    const { body } = await fetchURL(`${BASE_URL}/index.html`);
    if (!body.includes("We've Been Building Software for 28 Years")) {
      throw new Error('New hero headline missing');
    }
    if (!body.includes("We're not flashy. We're reliable")) {
      throw new Error('Positioning statement missing');
    }
  });

  // Test 3: Stats section updated
  await test('Stats section updated with impact metrics', async () => {
    const { body } = await fetchURL(`${BASE_URL}/index.html`);
    if (!body.includes('$2B') || !body.includes('client revenue growth')) {
      throw new Error('Revenue stat missing');
    }
    if (!body.includes('10X') || !body.includes('user scaling')) {
      throw new Error('Scaling stat missing');
    }
    if (!body.includes('100%') || !body.includes('full-time employees')) {
      throw new Error('Employment stat missing');
    }
  });

  // Test 4: Contact form updated
  await test('Contact form header updated', async () => {
    const { body } = await fetchURL(`${BASE_URL}/contact.html`);
    if (!body.includes("Let's Talk About Your Project")) {
      throw new Error('New header missing');
    }
    if (!body.includes('No sales pitch')) {
      throw new Error('Honest positioning missing');
    }
    if (body.includes('get back to soon')) {
      throw new Error('Typo still present');
    }
  });

  // Test 5: Company page updated
  await test('Company page about section updated', async () => {
    const { body } = await fetchURL(`${BASE_URL}/company.html`);
    if (!body.includes("We've Been Doing This Since 1997")) {
      throw new Error('New headline missing');
    }
    if (!body.includes("We're not the flashiest agency")) {
      throw new Error('Positioning statement missing');
    }
  });

  // Test 6: Meta descriptions
  await test('Homepage meta description updated', async () => {
    const { body } = await fetchURL(`${BASE_URL}/index.html`);
    if (!body.includes('meta name="description"') ||
        !body.includes('28 years building software that scales')) {
      throw new Error('Meta description not updated');
    }
  });

  // Test 7: Critical assets exist
  const assets = [
    'css/style.css',
    'js/app.min.js',
    'assets/logos/solutionstream-logo-horz.svg'
  ];
  for (const asset of assets) {
    await test(`Asset: ${asset}`, async () => {
      if (!fs.existsSync(path.join(SITE_DIR, asset))) {
        throw new Error('File not found');
      }
    });
  }

  // Summary
  log('\n' + '='.repeat(50), 'cyan');
  log(`Results: ${passed} passed, ${failed} failed`, failed === 0 ? 'green' : 'red');
  log('='.repeat(50) + '\n', 'cyan');

  process.exit(failed > 0 ? 1 : 0);
}

// Check server is running first
http.get(BASE_URL, () => {
  runTests();
}).on('error', () => {
  log('❌ Server not running on port 8000\n', 'red');
  log('Start with: cd solutionstream.com && python3 -m http.server 8000\n', 'blue');
  process.exit(1);
});
