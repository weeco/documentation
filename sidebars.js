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
      collapsed: true,
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
      collapsed: true,
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
      collapsed: true,
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
      ]
    },    
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      link: { type: 'doc', id: 'core/deployment/index'},
      collapsed: true,
      items: [
        'core/deployment/production-deployment-automation',
        'core/deployment/guide-rpk-container',
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Configuring Redpanda Operator for Connectivity',
              id: 'core/deployment/kubernetes-connectivity',
            },            
            'core/deployment/kubernetes-external-connect',
            {
              type: 'doc',
              label: 'Using Configuration Parameters with a Custom Resource',
              id: 'core/deployment/kubernetes-additional-config',
            },
            {
              type: 'doc',
              label: 'Arbitrary Configuration',
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
          label: 'Deploying for Production',
          id: 'core/deployment/production-deployment',
        },
      ]
    },    
    {
      type: 'category',
      label: 'Cluster Administration',
      link: { type: 'doc', id: 'core/cluster-administration/index'},
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Configuration',
          link: { type: 'doc', id: 'core/cluster-administration/configuration'},
          items: [
            {
              type: 'doc',
              label: 'Configuring Cluster Properties',
              id: 'core/cluster-administration/cluster-property-configuration',
            },
            {
              type: 'doc',
              label: 'Configuring Node Properties',
              id: 'core/cluster-administration/node-property-configuration',
            },
            'core/cluster-administration/listener-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Cluster balancing',
          collapsible: true,
          collapsed: true,
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
          label: 'Node Maintenance Mode',
          id: 'core/cluster-administration/node-management',
        },             
        'core/cluster-administration/monitoring', 
        'core/cluster-administration/rolling-upgrade',
      ]
    },
    {
      type: 'category',
      label: 'Data Management',
      link: { type: 'doc', id: 'core/data-management/index'},
      collapsible: true,
      collapsed: true,
      items: [
        'core/data-management/tiered-storage',
        'core/data-management/remote-read-replicas',
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
      collapsed: true,
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
      collapsed: true,
      items: [
        'core/security/encryption',
        'core/security/authentication',
        'core/security/authorization',
        'core/security/iam-roles',
        {
          type: 'category',
          label: 'Security on Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Redpanda Security on Kubernetes',
              id: 'core/security/security-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring TLS on Kubernetes',
              id: 'core/security/tls-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring SASL on Kubernetes',
              id: 'core/security/kubernetes-sasl',
            },
            {
              type: 'doc',
              label: 'Configuring mTLS on Kubernetes',
              id: 'core/security/kubernetes-mtls',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Redpanda Console',
      link: { type: 'doc', id: 'core/console/index'},
      collapsible: true,
      collapsed: true,
      items: [
        'core/console/installation',
        {
          type: 'category',
          label: 'Features',
          items: [
            'core/console/features/kafka-connect',
            'core/console/features/record-deserialization',
            'core/console/features/schema-registry',
            'core/console/features/protobuf',
            'core/console/features/topic-documentation',
            'core/console/features/programmable-push-filters',
            'core/console/features/http-path-rewrites'
          ],
        },
        {
          type: 'category',
          label: 'Single Sign On',
          items: [
            {
              type: 'doc',
              label: 'Authentication',
              id: 'core/console/single-sign-on/authentication',
            },
            {
              type: 'doc',
              label: 'Authorization',
              id: 'core/console/single-sign-on/authorization',
            },
            {
              type: 'doc',
              label: 'GitHub',
              id: 'core/console/single-sign-on/identity-providers/github',
            },
            {
              type: 'doc',
              label: 'Google',
              id: 'core/console/single-sign-on/identity-providers/google',
            },
            {
              type: 'doc',
              label: 'Okta',
              id: 'core/console/single-sign-on/identity-providers/okta',
            },
            {
              type: 'doc',
              label: 'Generic OIDC',
              id: 'core/console/single-sign-on/identity-providers/generic-oidc',
            }
          ]
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            {
              type: 'doc',
              label: 'Redpanda Console Configuration',
              id: 'core/console/reference/config',
            },
            {
              type: 'doc',
              label: 'Redpanda Console Role-Binding Configuration',
              id: 'core/console/reference/role-bindings',
            },
            {
              type: 'doc',
              label: 'Docker Compose Configuration',
              id: 'core/console/reference/docker-compose',
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'doc', id: 'core/reference/index'},
      collapsible: true,
      collapsed: true,
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
        'core/reference/internal-metrics',
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