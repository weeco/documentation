const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Redpanda Documentation',
  tagline: 'A modern streaming platform for mission critical workloads',
  url: 'https://docs.redpanda.com',
  baseUrl: '/',
  trailingSlash: 'true',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redpanda-data', // Usually your GitHub org/user name.
  projectName: 'redpanda', // Usually your repo name.,
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      disableSwitch: false
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Vectorized Logo',
        src: 'img/RedpandaLogo.svg',
        srcDark: 'img/RedpandaLogoInverted.svg',
        width: '144',
        height: '24',
        href: 'https://redpanda.com'
      },
      items: [
        // { type: 'docsVersionDropdown',position: 'right'},
        // { type: 'localeDropdown',position: 'right'},
        { href: 'https://redpanda.com/redpanda', label: 'Platform', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/cloud', label: 'Cloud', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/team', label: 'Team', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/careers', label: 'Careers', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/blog', label: 'Blog', position: 'right', target: '_self' },
        { 
          href: 'https://join.slack.com/t/vectorizedcommunity/shared_invite/zt-ng2ze1uv-l5VMWSGQHB9gp47~kNnYGA', 
          position: 'right',
          label: 'Slack',
          className: 'header-icon header-icon-slack',
          'aria-label': 'Slack',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redpanda Logo',
        src: 'img/RedpandaLogo.svg',
        srcDark: 'img/RedpandaLogoInverted.svg',
        width: '144',
        height: '24',
        href: 'https://redpanda.com'
      },
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Platform', to: 'https://redpanda.com/redpanda/', target: '_self' },
            { label: 'Cloud', to: 'https://redpanda.com/cloud', target: '_self' },
            { label: 'Documentation', to: '/' },
            { label: 'Blog', to: 'https://redpanda.com/blog', target: '_self' },
            { label: 'Events', to: 'https://redpanda.com/events', target: '_self' },
            { label: 'Support', to: 'https://support.redpanda.com', target: '_self' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Team', to: 'https://redpanda.com/team', target: '_self' },
            { label: 'Careers', to: 'https://redpanda.com/careers', target: '_self' },
            { label: 'Press & Media', to: 'https://redpanda.com/press', target: '_self' },
            { label: 'Privacy Policy', to: 'https://redpanda.com/privacy-policy', target: '_self' },
          ],
        },
      ],
      copyright: `<p style="font-size:10px;margin-bottom:0px;">© 2022 Redpanda Data Inc. All Rights Reserved.</p>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['yaml','docker','powershell','git', 'ini']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
        }
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
  ]
};
