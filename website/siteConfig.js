/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Redux Toolkit', // Title for your website.
  tagline:
    'The official, opinionated, batteries-included toolset for efficient Redux development',
  url: 'https://redux-toolkit.js.org', // Your website URL
  baseUrl: '/',
  docsUrl: '',
  algolia: {
    apiKey: '82d838443b672336bf63cab4772d9eb4',
    indexName: 'redux-starter-kit',
    algoliaOptions: {}
  },

  // Used for publishing and more
  projectName: 'redux-toolkit',
  organizationName: 'reduxjs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'introduction/quick-start', label: 'Quick Start' },
    { doc: 'api/configureStore', label: 'API' },

    {
      href: 'https://www.github.com/reduxjs/redux-toolkit',
      label: 'Github'
    }
  ],

  /* path to images for header/footer */
  headerIcon: 'img/redux_white.svg',
  footerIcon: 'img/redux_white.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#764ABC',
    secondaryColor: '#764ABC'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright:
    'Copyright (c) 2015-present Dan Abramov and the Redux documentation authors.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'monokai'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/scripts/sidebarScroll.js',
    '/scripts/codeblock.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    'https://buttons.github.io/buttons.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/redux-logo-landscape.png',
  twitterImage: 'img/redux-logo-twitter.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/reduxjs/redux-toolkit',

  gaTrackingId: 'UA-130598673-3'
}

module.exports = siteConfig
