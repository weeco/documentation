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
      link: { type: 'doc', id: 'introduction/index'},
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Introduction to Events and Streaming',
          id: 'introduction/intro-to-events',
        },        
        {
          type: 'doc',
          label: 'Designed for Performance',
          id: 'introduction/autotune',
        },
        'introduction/licenses',
        {
          type: 'doc',
          label: 'Technical Preview',
          id: 'introduction/tech-preview',
        },  
      ],
    },
    {
      type: 'category',
      label: 'Install and Upgrade',
      link: { type: 'doc', id: 'install-upgrade/index'},
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Installing Preview Versions',
          id: 'install-upgrade/install-preview',
        },
        {
          type: 'doc',
          label: 'Version Upgrade',
          id: 'install-upgrade/version-upgrade',
        },

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
              label: 'kind',
              id: 'quickstart/kubernetes-qs-local-access',
            },
            {
              type: 'doc',
              label: 'minikube',
              id: 'quickstart/kubernetes-qs-minikube',
            },
            {
              type: 'doc',
              label: 'Cloud',
              id: 'quickstart/kubernetes-qs-cloud',
            },
          ],
        },
      ]
    },    
    {
      type: 'category',
      label: 'Deployment',
      collapsible: true,
      link: { type: 'doc', id: 'deployment/index'},
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
              label: 'Configuring Redpanda Operator for Connectivity',
              id: 'deployment/kubernetes-connectivity',
            },            
            'deployment/kubernetes-external-connect',
            {
              type: 'doc',
              label: 'Using Configuration Parameters with a Custom Resource',
              id: 'deployment/kubernetes-additional-config',
            },
            {
              type: 'doc',
              label: 'Arbitrary Configuration',
              id: 'deployment/arbitrary-configuration',
            },
            
          ]
        },
        {
          type: 'category',
          label: 'Performance and storage tuning',
          items: [
            'deployment/disk-utilization',
            'deployment/io-optimization',

          ]
        },
        {
          type: 'doc',
          label: 'Deploying for Production',
          id: 'deployment/production-deployment',
        },
      ]
    },    
    {
      type: 'category',
      label: 'Cluster Administration',
      link: { type: 'doc', id: 'cluster-administration/index'},
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Configuration',
          link: { type: 'doc', id: 'cluster-administration/configuration'},
          items: [
            {
              type: 'doc',
              label: 'Configuring Cluster Properties',
              id: 'cluster-administration/cluster-property-configuration',
            },
            {
              type: 'doc',
              label: 'Configuring Node Properties',
              id: 'cluster-administration/node-property-configuration',
            },
            'cluster-administration/listener-configuration',
          ],
        },
        {
          type: 'category',
          label: 'Cluster balancing',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'cluster-administration/cluster-balancing'},
          items: [
            {
              type: 'doc',
              label: 'Configuring Continuous Data Balancing',
              id: 'cluster-administration/continuous-data-balancing',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Node Maintenance Mode',
          id: 'cluster-administration/node-management',
        },             
        'cluster-administration/monitoring', 
        'cluster-administration/rolling-upgrade',
      ]
    },
    {
      type: 'category',
      label: 'Data Management',
      link: { type: 'doc', id: 'data-management/index'},
      collapsible: true,
      collapsed: true,
      items: [
        'data-management/tiered-storage',
        'data-management/remote-read-replicas',
        'data-management/data-transform',
        'data-management/data-migration',
        'data-management/data-archiving',
        'data-management/rack-awareness',
      ]
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'doc', id: 'development/index'},
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Kafka clients',
          id: 'development/kafka-clients',
        },
        'development/guide-nodejs',
        'development/consumer-offsets',
        'development/idempotent-producers',
      ]
    },
    {
      type: 'category',
      label: 'Security',
      link: { type: 'doc', id: 'security/index'},
      collapsible: true,
      collapsed: true,
      items: [
        'security/encryption',
        'security/authentication',
        'security/authorization',
        'security/iam-roles',
        {
          type: 'category',
          label: 'Security on Kubernetes',
          items: [
            {
              type: 'doc',
              label: 'Redpanda Security on Kubernetes',
              id: 'security/security-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring TLS on Kubernetes',
              id: 'security/tls-kubernetes',
            },
            {
              type: 'doc',
              label: 'Configuring SASL on Kubernetes',
              id: 'security/kubernetes-sasl',
            },
            {
              type: 'doc',
              label: 'Configuring mTLS on Kubernetes',
              id: 'security/kubernetes-mtls',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Redpanda Console',
      link: { type: 'doc', id: 'console/index'},
      collapsible: true,
      collapsed: true,
      items: [
        'console/installation',
        {
          type: 'category',
          label: 'Features',
          items: [
            'console/features/kafka-connect',
            'console/features/record-deserialization',
            'console/features/schema-registry',
            'console/features/protobuf',
            'console/features/topic-documentation',
            'console/features/programmable-push-filters',
            'console/features/http-path-rewrites'
          ],
        },
        {
          type: 'category',
          label: 'Single Sign On',
          items: [
            {
              type: 'doc',
              label: 'Authentication',
              id: 'console/single-sign-on/authentication',
            },
            {
              type: 'doc',
              label: 'Authorization',
              id: 'console/single-sign-on/authorization',
            },
            {
              type: 'doc',
              label: 'GitHub',
              id: 'console/single-sign-on/identity-providers/github',
            },
            {
              type: 'doc',
              label: 'Google',
              id: 'console/single-sign-on/identity-providers/google',
            },
            {
              type: 'doc',
              label: 'Okta',
              id: 'console/single-sign-on/identity-providers/okta',
            },
            {
              type: 'doc',
              label: 'Generic OIDC',
              id: 'console/single-sign-on/identity-providers/generic-oidc',
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
              id: 'console/reference/config',
            },
            {
              type: 'doc',
              label: 'Redpanda Console Role-Binding Configuration',
              id: 'console/reference/role-bindings',
            },
            {
              type: 'doc',
              label: 'Docker Compose Configuration',
              id: 'console/reference/docker-compose',
            }
          ]
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
        'reference/cluster-properties',
        'reference/tunable-properties',
        'reference/node-properties',        
        'reference/node-configuration-sample',
        {
          type: 'doc',
          label: 'rpk commands',
          id: 'reference/rpk-commands',
        },        
        {
          type: 'link',
          label: 'Operator Custom Resource Definition (CRD)',
          href: 'https://doc.crds.dev/github.com/vectorizedio/redpanda',
        },
        'reference/internal-metrics',
        'reference/faq',
        {
          type: 'link',
          label: 'Release notes',
          href: 'https://github.com/redpanda-data/redpanda/releases'
        },
        
      ]
    },
    {
      type: 'doc',
      id: 'support',
    },
  ]
};