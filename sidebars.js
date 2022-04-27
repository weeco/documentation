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
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        description: 'New in event streaming? Here are some Introduction guides.',
        slug: '/introduction',
        keywords: ['introduction, intro, events'],
      },
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
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Quick Start',
        description: 'We can get you running with Redpanda in just a few minutes. Which platform do you want to use?',
        slug: '/quickstart',
        keywords: ['quickstart, start, kubernetes, docker, linux, macos, windows'],
      },
      items: [
        {
          type: 'category',
          label: 'Local',
          items: [
            {
              type: 'doc',
              label: 'Docker',
              id: 'quickstart/quick-start-docker',
            },
            {
              type: 'doc',
              label: 'Linux',
              id: 'quickstart/quick-start-linux',
            }, 
            {
              type: 'doc',
              label: 'macOS',
              id: 'quickstart/quick-start-macos',
            },
            {
              type: 'doc',
              label: 'Windows',
              id: 'quickstart/quick-start-windows',
            },            
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
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Deployment',
        description: 'You can deploy Redpanda to a number of platforms and systems.',
        slug: '/deployment',
        keywords: ['deployment, terraform, cluster, kubernetes, performance, storage, production, beta, version'],
      },
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
        'deployment/performance-storage-tuning',
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
      link: {
        type: 'generated-index',
        title: 'Cluster Management',
        description: 'You can perform day-to-day operations very easily with Redpanda.',
        slug: '/cluster-administration',
        keywords: ['cluster, administration, configuration, monitoring, version, upgrade'],
      },
      collapsible: true,
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
      link: {
        type: 'generated-index',
        title: 'Data management',
        description: 'Managing your data is one of the key components of a stream-based application and Redpanda can help you with that.',
        slug: '/data-management',
        keywords: ['data, management, shadow, indexing, webassembly, archiving, migrating'],
      },
      collapsible: true,
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
      link: {
        type: 'generated-index',
        title: 'Development',
        slug: '/development',
        keywords: ['development, library, client, nodejs'],
      },
      collapsible: true,
      collapsed: false,
      items: [
        'development/libraries',
        'development/guide-nodejs',
      ]
    },
    {
      type: 'category',
      label: 'Security',
      link: {
        type: 'generated-index',
        title: 'Security',
        description: 'Security is at the heart of Redpanda and we highly recommend these articles:',
        slug: '/security',
        keywords: ['security, encryption, authorization, authentication, kubernetes, configuration, TLS, SASL, mTLS'],
      },
      collapsible: true,
      collapsed: false,
      items: [
        'security/acls',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Redpanda security',
              id: 'security/kubernetes-security',
            },
            {
              type: 'doc',
              label: 'Configuring TLS',
              id: 'security/tls-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring SASL authentication',
              id: 'security/kubernetes-sasl',
            },
            {
              type: 'doc',
              label: 'Configuring mTLS authentication',
              id: 'security/kubernetes-mtls',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'Here are some reference pages about what else Redpanda has to offer:',
        slug: '/reference',
        keywords: ['reference, rpk, commands, CRD, operator, questions, release, notes'],
      },
      collapsible: true,
      collapsed: false,
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