import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

/* Root test directory */
testDir: './tests',

/* Run tests in parallel */
fullyParallel: true,

/* Fail if test.only is committed */
forbidOnly: !!process.env.CI,

/* Retry failed tests in CI */
retries: process.env.CI ? 2 : 0,

/* Run one worker in CI */
workers: process.env.CI ? 1 : undefined,

/* HTML Report */
reporter: 'html',

/* Shared settings */
use: {
trace: 'on-first-retry'
},

/* Projects */
projects: [

// ==========================
// UI AUTOMATION
// ==========================
{
name: 'UI Tests',

testDir: './tests/ui',

use: {
...devices['Desktop Chrome'],

baseURL: 'https://qa-practice.razvanvancea.ro',

screenshot: 'only-on-failure',

video: 'retain-on-failure',

trace: 'on-first-retry',

viewport: {
width: 1440,
height: 900
},

ignoreHTTPSErrors: true
}
},

// ==========================
// API AUTOMATION
// ==========================
{
name: 'API Tests',

testDir: './tests/api',

use: {
baseURL: 'http://localhost:8887',

extraHTTPHeaders: {
'Content-Type': 'application/json'
}
}
}

]

});
