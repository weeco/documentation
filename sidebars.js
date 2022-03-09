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
      link: { type: 'doc', id: 'introduction/index'},
      collapsible: false,
      collapsed: false,
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
      collapsible: false,
      collapsed: false,
      link: { type: 'doc', id: 'quickstart/index'},
      items: [
        {
          type: 'category',
          label: 'Local',
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
              label: 'Cloud',
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
      label: 'Deployment',
      collapsible: false,
      link: { type: 'doc', id: 'deployment/index'},
      collapsed: false,
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
        'deployment/well-known-io',
        {
          type: 'doc',
          label: 'Deploying for production',
          id: 'deployment/production-deployment',
        },
        'deployment/install-preview',
      ]
    },    
    {
      type: 'category',
      label: 'Cluster administration',
      link: { type: 'doc', id: 'cluster-administration/index'},
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Custom configuration',
          id: 'cluster-administration/configuration',
        },        
        'cluster-administration/monitoring',
        'cluster-administration/version-upgrade',        
      ]
    },
    {
      type: 'category',
      label: 'Data management',
      link: { type: 'doc', id: 'data-management/index'},
      collapsible: false,
      collapsed: false,
      items: [
        'data-management/shadow-indexing',
        'data-management/data-transform',
        'data-management/data-migration',
        'data-management/data-archiving',
      ]
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'doc', id: 'development/index'},
      collapsible: false,
      collapsed: false,
      items: [
        'development/guide-nodejs',
      ]
    },
    {
      type: 'category',
      label: 'Security',
      link: { type: 'doc', id: 'security/index'},
      collapsible: false,
      collapsed: false,
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
      link: { type: 'doc', id: 'reference/index'},
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