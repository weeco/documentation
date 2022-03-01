/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'link',
      label: 'Docs home',
      href: 'https://docs.redpanda.com/',
    },
    {
      type: 'category',
      label: 'Getting started',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'quickstart/index'},
      items: [
        'quickstart/quick-start-docker',
        'quickstart/quick-start-kubernetes',
        'quickstart/quick-start-linux',
        'quickstart/quick-start-macos',
        'quickstart/quick-start-windows',
        'cluster-management/install-preview',
      ]
    },
    {
      type: 'category',
      label: 'Feature guides',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'features-guide'},
      items: [
        'introduction/intro-to-events',
        'deployment/guide-rpk-container',
        'deployment/guide-nodejs',
        'deployment/kubernetes-connectivity',
        'deployment/kubernetes-external-connect',
        'deployment/kubernetes-additional-config',
        'security/acls',
        'security/tls-kubernetes',
      ]
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      collapsed: true,
      items: [
        'deployment/production-deployment',
        'cluster-management/monitoring',
        'deployment/configuration',
        'deployment/arbitrary-configuration',
        'deployment/production-deployment-automation',        
      ]
    },
    {
      type: 'category',
      label: 'Data management',
      collapsible: true,
      collapsed: true,
      items: [
        'data-management/shadow-indexing',
        'data-management/data-archiving',
        'data-management/data-transform',
        'data-management/data-migration',
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      items: [
        'reference/rpk-commands',
        'introduction/autotune',
        'deployment/well-known-io',
        'cluster-management/version-upgrade',
        'reference/faq',
      ]
    },
    {
      type: 'link',
      label: 'Release notes',
      href: 'https://github.com/redpanda-data/redpanda/releases'
    },
    {
      type: 'doc',
      id: 'support',
    },
  ],
};