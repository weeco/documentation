const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Redpanda Documentation',
  tagline: 'A modern streaming platform for mission critical workloads',
  url: 'https://docs.redpanda.com',
  baseUrl: '/',
  trailingSlash: 'true',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Redpanda_Favicon_32px.svg',
  organizationName: 'redpanda-data', // Usually your GitHub org/user name.
  projectName: 'redpanda', // Usually your repo name.,
  themeConfig: {
    colorMode: {
      disableSwitch: false
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Redpanda Logo',
        src: 'img/redpanda-docs-logo.svg',
        srcDark: 'img/redpanda-docs-logo.svg',
        href: '/'
      },
      items: [
        // { type: 'docsVersionDropdown',position: 'right'},
        // { type: 'localeDropdown',position: 'right'},
        { href: 'https://redpanda.com/', label: 'Redpanda', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/resources/', label: 'Resources', position: 'right', target: '_self' },
        { href: 'https://university.redpanda.com/', label: 'Training', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/blog/', label: 'Blog', position: 'right', target: '_self' },
        { href: 'https://support.redpanda.com/hc/en-us/', label: 'Helpdesk', position: 'right', target: '_self' },
        { href: 'https://rpnda.co/slack', label: 'Community', position: 'right', target: '_self' },
        { href: 'https://github.com/redpanda-data/redpanda/', label: 'GitHub', position: 'right', target: '_self' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redpanda Logo',
        src: 'img/redpanda-logo.svg',
        srcDark: 'img/redpanda-logo.svg',
        href: 'https://redpanda.com/'
      },
      links: [
        {
        }
      ],
      copyright: '<p style=" color: #808080">© 2022 Redpanda Data Inc. All Rights Reserved.</p>'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash', 'docker', 'yaml','docker','powershell','git', 'ini', 'properties', 'javascript']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: '22.2',
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],    
    function (context, options) {
      return {
        name: 'docusaurus-plugin',
        injectHtmlTags({content}) {
          return {
            preBodyTags: [`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB2CSV5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`],
          };
        },
      }
    },
  ],
  scripts: [
    {
      src: '/js/googletag.js',
      async: false,
    }
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
};
