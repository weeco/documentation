const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Redpanda Documentation',
  tagline: 'A modern streaming platform for mission critical workloads',
  url: 'https://docs.redpanda.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vectorizedio', // Usually your GitHub org/user name.
  projectName: 'redpanda', // Usually your repo name.,
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Vectorized Logo',
        src: 'img/RedpandaLogo.svg',
        srcDark: 'img/RedpandaLogoInverted.svg',
        width: '144',
        height: '24'
      },
      items: [
        // { type: 'docsVersionDropdown',position: 'right'},
        // { type: 'localeDropdown',position: 'right'},
        { href: 'https://redpanda.com/redpanda', label: 'Platform', position: 'right' },
        { href: 'https://redpanda.com/cloud', label: 'Cloud', position: 'right' },
        { href: '/', label: 'Docs', position: 'right' },
        { href: 'https://redpanda.com/team', label: 'Team', position: 'right' },
        { href: 'https://redpanda.com/careers', label: 'Careers', position: 'right' },        
        { href: 'https://redpanda.com/blog', label: 'Blog', position: 'right' },
        { 
          href: 'https://join.slack.com/t/vectorizedcommunity/shared_invite/zt-ng2ze1uv-l5VMWSGQHB9gp47~kNnYGA', 
          position: 'right',
          label: 'Slack',
          className: 'header-icon header-icon-slack',
          'aria-label': 'Slack',
        },
        {
          href: 'https://github.com/vectorizedio/redpanda',
          position: 'right',
          label: 'Github',
          className: 'header-icon header-icon-github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Redpanda', to: 'https://redpanda.com/redpanda/' },
            { label: 'Cloud', to: 'https://redpanda.com/cloud' },
            { label: 'Documentation', to: '/' },
            { label: 'Blog', to: 'https://redpanda.com/blog' },
            { label: 'Events', to: 'https://redpanda.com/events' },
            { label: 'Support', to: 'https://support.redpanda.com' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Team', to: 'https://redpanda.com/team' },
            { label: 'Careers', to: 'https://redpanda.com/careers' },
            { label: 'Press & Media', to: 'https://redpanda.com/press' },
            { label: 'Privacy Policy', to: 'https://redpanda.com/privacy-policy' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact', to: 'https://redpanda.com/contact' },
            { label: 'Feedback', to: 'https://redpanda.com/feedback' },
            { label: 'h4ck::73h::pl4n37 scholarship', to: 'https://redpanda.com/scholarship' },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
};
