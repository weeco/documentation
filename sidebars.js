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
      type: 'category',
      label: 'Getting started',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'getting-started/index'},
      items: [
        'getting-started/quick-start-docker',
        'getting-started/quick-start-kubernetes',
        'getting-started/quick-start-linux',
        'getting-started/quick-start-macos',
        'getting-started/quick-start-windows',
      ]
    },
    {
      type: 'category',
      label: 'Features guides',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'features/index'},
      items: [
        'features/intro-to-events',
        'features/guide-rpk-container',
        'features/guide-nodejs',
        'features/kubernetes-connectivity',
        'features/kubernetes-additional-config',
        'features/guide-wasm-elastic',
        'features/acls',
        'features/tls-kubernetes',
      ]
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      collapsed: true,
      items: [
        'deploy-self-hosted/production-deployment',
        'deploy-self-hosted/monitoring',
        'deploy-self-hosted/configuration',
        'deploy-self-hosted/arbitrary-configuration',
        'deploy-self-hosted/production-deployment-automation',        
      ]
    },
    {
      type: 'category',
      label: 'Data Management',
      collapsible: true,
      collapsed: true,
      items: [
        'data-management/shadow-indexing',
        'data-management/data-archiving',
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
        'reference/autotune',
        'reference/well-known-io',
        'reference/faq',
      ]
    },
    {
      type: 'link',
      label: 'Release notes',
      href: 'https://github.com/vectorizedio/redpanda/releases'
    },
    {
      type: 'doc',
      id: 'support',
    },
  ],
};
