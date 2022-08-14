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
      type: 'doc',
      label: 'Docs home',
      id: 'home/index',
    },
    {
      type: 'category',
      label: 'Introduction',
      link: { type: 'doc', id: 'core/introduction/index'},
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Introduction to Events and Streaming',
          id: 'core/introduction/intro-to-events',
        },        
        {
          type: 'doc',
          label: 'Designed for Performance',
          id: 'core/introduction/autotune',
        },     
        'core/introduction/licenses',
        {
          type: 'doc',
          label: 'Technical Preview',
          id: 'core/introduction/tech-preview',
        },  
      ],
    },
    {
      type: 'category',
      label: 'Install and Upgrade',
      link: { type: 'doc', id: 'core/install-upgrade/index'},
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Installing Preview Versions',
          id: 'core/install-upgrade/install-preview',
        },
        {
          type: 'doc',
          label: 'Version Upgrade',
          id: 'core/install-upgrade/version-upgrade',
        }, 
        
      ],
    },
    {
      type: 'category',
      label: 'Quickstarts',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'core/quickstart/index'},
      items: [
        {
          type: 'category',
          label: 'Local',
          items: [
            {
              type: 'doc',
              label: 'Docker',
              id: 'core/quickstart/quick-start-docker',
            },
            {
              type: 'doc',
              label: 'Linux',
              id: 'core/quickstart/quick-start-linux',
            },
            {
              type: 'doc',
              label: 'macOS',
              id: 'core/quickstart/quick-start-macos',
            },
            {
              type: 'doc',
              label: 'Windows',
              id: 'core/quickstart/quick-start-windows',
            },
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'kind',
              id: 'core/quickstart/kubernetes-qs-local-access',
            },
            {
              type: 'doc',
              label: 'minikube',
              id: 'core/quickstart/kubernetes-qs-minikube',
            },
            {
              type: 'doc',
              label: 'Cloud',
              id: 'core/quickstart/kubernetes-qs-cloud',
            },            
          ],
        },
        'core/quickstart/what-is-next',
      ]
    },    
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      link: { type: 'doc', id: 'core/deployment/index'},
      collapsed: false,
      items: [
        'core/deployment/production-deployment-automation',
        'core/deployment/guide-rpk-container',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Configuring Redpanda operator for connectivity',
              id: 'core/deployment/kubernetes-connectivity',
            },            
            'core/deployment/kubernetes-external-connect',
            {
              type: 'doc',
              label: 'Using configuration parameters with a custom resource',
              id: 'core/deployment/kubernetes-additional-config',
            },
            {
              type: 'doc',
              label: 'Arbitrary configuration',
              id: 'core/deployment/arbitrary-configuration',
            },
            
          ]
        },
        {
          type: 'category',
          label: 'Performance and storage tuning',
          items: [
            'core/deployment/disk-utilization',     
            'core/deployment/io-optimization',
            
          ]
        },
        {
          type: 'doc',
          label: 'Deploying for production',
          id: 'core/deployment/production-deployment',
        },
      ]
    },    
    {
      type: 'category',
      label: 'Cluster administration',
      link: { type: 'doc', id: 'core/cluster-administration/index'},
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Configuration',
          link: { type: 'doc', id: 'core/cluster-administration/configuration'},
          items: [
            {
              type: 'doc',
              label: 'Configuring cluster properties',
              id: 'core/cluster-administration/cluster-property-configuration',
            },
            {
              type: 'doc',
              label: 'Configuring node properties',
              id: 'core/cluster-administration/node-property-configuration',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cluster balancing',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'core/cluster-administration/cluster-balancing'},
          items: [
            {
              type: 'doc',
              label: 'Configuring Continuous Data Balancing',
              id: 'core/cluster-administration/continuous-data-balancing',
            },
          ],
        },    
        {
          type: 'doc',
          label: 'Node management',
          id: 'core/cluster-administration/node-management',
        },             
        'core/cluster-administration/monitoring', 
      ]
    },
    {
      type: 'category',
      label: 'Data management',
      link: { type: 'doc', id: 'core/data-management/index'},
      collapsible: true,
      collapsed: false,
      items: [
        'core/data-management/tiered-storage',
        'core/data-management/data-transform',
        'core/data-management/data-migration',
        'core/data-management/data-archiving',
        'core/data-management/rack-awareness',
      ]
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'doc', id: 'core/development/index'},
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Kafka clients',
          id: 'core/development/kafka-clients',
        },
        'core/development/guide-nodejs',
        'core/development/consumer-offsets',
        'core/development/idempotent-producers',
      ]
    },
    {
      type: 'category',
      label: 'Security',
      link: { type: 'doc', id: 'core/security/index'},
      collapsible: true,
      collapsed: false,
      items: [
        'core/security/acls',
        'core/security/iam-roles',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Redpanda security',
              id: 'core/security/kubernetes-security',
            },
            {
              type: 'doc',
              label: 'Configuring TLS',
              id: 'core/security/tls-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring SASL authentication',
              id: 'core/security/kubernetes-sasl',
            },
            {
              type: 'doc',
              label: 'Configuring mTLS authentication',
              id: 'core/security/kubernetes-mtls',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'doc', id: 'core/reference/index'},
      collapsible: true,
      collapsed: false,
      items: [
        'core/reference/cluster-properties',
        'core/reference/tunable-properties',
        'core/reference/node-properties',        
        'core/reference/node-configuration-sample',
        {
          type: 'doc',
          label: 'rpk commands',
          id: 'core/reference/rpk-commands',
        },        
        {
          type: 'link',
          label: 'Operator Custom Resource Definition (CRD)',
          href: 'https://doc.crds.dev/github.com/vectorizedio/redpanda',
        },        
        'core/reference/faq',
        {
          type: 'link',
          label: 'Release notes',
          href: 'https://github.com/redpanda-data/redpanda/releases'
        },
        
      ]
    },
    {
      type: 'doc',
      id: 'core/support',
    },
  ],
  cloudSidebar:
  [
    {
      type: 'doc',
      label: 'Docs home',
      id: 'home/index',
    },
    {
      type: 'doc',
      label: 'Cloud Intro',
      id: 'cloud/index',
    },
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        'cloud/kubernetes/development',
        'cloud/kubernetes/production',       
      ],
    },
  ],
  homeSidebar : 
  [
    {
    type: 'doc',
    label: 'Docs home',
    id: 'home/index',
  },
    {
      type: 'doc',
      label: 'Core',
      id: 'core/introduction/index',
    },
    {
      type: 'doc',
      label: 'Cloud',
      id: 'cloud/index',
    },
  ]
};