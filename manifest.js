/* tslint:disable:quotemark max-line-length */

const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const hash = "'sha256-APkC3ZgyFTbE0E0tK0zWZ/P2vtrQhgdmG7VPzUFt4o4='"; // minified loader.js

export default {
  manifest_version: 2,

  name: 'New Tab',
  description: 'A high performance new tab page that gets you where you need to go faster.',
  version: pkg.version,
  version_name: process.env.APP_RELEASE,
  homepage_url: 'https://github.com/MaxMilton/new-tab',

  permissions: [
    'bookmarks',
    'chrome://favicon/',
    'history',
    'storage',
    'tabs',
  ],
  chrome_url_overrides: {
    newtab: 'n.html',
  },
  options_ui: {
    chrome_style: true,
    page: 's.html',
  },
  background: {
    scripts: ['b.js'],
    persistent: true, // keep the extension in memory for fast load
  },
  offline_enabled: true,
  incognito: 'not_allowed',

  ...(isProduction
    // tighter security than default
    ? { content_security_policy: `script-src 'self' ${hash}; object-src 'self'` }
    // allow connections from http://localhost during local development
    : { content_security_policy: `script-src 'self' blob: filesystem: chrome-extension-resource: http://localhost:* ${hash}; object-src 'self'` }
  ),
};
