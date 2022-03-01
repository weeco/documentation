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
      href: '/',
    },
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'An introduction to events and streaming',
          id: 'introduction/intro-to-events',
        },        
        'introduction/autotune',
      ],
    },
    {
      type: 'category',
      label: 'Quickstarts',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'quickstart/index'},
      items: [
        {
          type: 'category',
          label: 'Local access',
          items: [
            'quickstart/quick-start-docker', 
            'quickstart/quick-start-linux',
            'quickstart/quick-start-macos',
            'quickstart/quick-start-windows',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'cloud',
              id: 'quickstart/kubernetes-qs-cloud',
            },
            {
              type: 'doc',
              label: 'kind',
              id: 'quickstart/kubernetes-qs-local-access',
            },
            {
              type: 'doc',
              label: 'minikube',
              id: 'quickstart/kubernetes-qs-minikube',
            },            
          ],
        },
        'quickstart/what-is-next',
      ]
    },    
    {
      type: 'category',
      label: 'Development',
      collapsible: true,
      collapsed: true,
      items: [
        'deployment/guide-nodejs',
      ]
    }, 
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      collapsed: true,
      items: [
        'deployment/production-deployment-automation',
        'deployment/guide-rpk-container',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Configuring Redpanda operator for connectivity',
              id: 'deployment/kubernetes-connectivity',
            },            
            'deployment/kubernetes-external-connect',
            {
              type: 'doc',
              label: 'Using configuration parameters with a custom resource',
              id: 'deployment/kubernetes-additional-config',
            },
            {
              type: 'doc',
              label: 'Arbitrary configuration',
              id: 'deployment/arbitrary-configuration',
            },            
          ]
        },
        'deployment/configuration',
        'deployment/well-known-io',
        {
          type: 'doc',
          label: 'Deploying for production',
          id: 'deployment/production-deployment',
        },         
      ]
    },    
    {
      type: 'category',
      label: 'Cluster administration',
      collapsible: true,
      collapsed: true,
      items: [
        'cluster-management/monitoring',
        'cluster-management/version-upgrade',
        'cluster-management/install-preview',
      ]
    },
    {
      type: 'category',
      label: 'Data management',
      collapsible: true,
      collapsed: true,
      items: [
        'data-management/shadow-indexing',
        'data-management/data-transform',
        'data-management/data-migration',
        'data-management/data-archiving',
      ]
    },
    {
      type: 'category',
      label: 'Security',
      collapsible: true,
      collapsed: true,
      items: [
        'security/acls',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'security/tls-kubernetes',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'rpk commands',
          id: 'reference/rpk-commands',
        },        
        {
          type: 'link',
          label: 'CRD operator',
          href: 'https://doc.crds.dev/github.com/vectorizedio/redpanda',
        },        
        'reference/faq',
        {
          type: 'link',
          label: 'Release notes',
          href: 'https://github.com/redpanda-data/redpanda/releases'
        }
      ]
    },
    {
      type: 'doc',
      id: 'support',
    },
  ],
};
