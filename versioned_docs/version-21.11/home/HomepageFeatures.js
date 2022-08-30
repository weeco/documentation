import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '60-second Guides',
    Svg: require('../../../static/img/quickstart.svg').default,
    description: (
      <>
        Try out Redpanda.                                                                                
      </>
    ),
    url: '/docs/quickstart/',
  },
  {
    title: 'Deploying for Production',
    Svg: require('../../../static/img/deployment.svg').default,
    description: (
      <>
        Install and configure Redpanda.                       
      </>
    ),
    url: '/docs/deployment/production-deployment',
  },
  {
    title: 'Redpanda Console',
    Svg: require('../../../static/img/console-docs.svg').default,
    description: (
      <>
        Use the Redpanda Console dashboard to administer clusters and get visibility into your data streams.
      </>
    ),
    url: '/docs/console',
  },
  {
    title: 'rpk Command Reference',
    Svg: require('../../../static/img/RPK-commands.svg').default,
    description: (
      <>
        Browse all commands for running Redpanda.
      </>
    ),
    url: '/docs/reference/rpk-commands',
  },
  {
    title: 'Tiered Storage',
    Svg: require('../../../static/img/try-now.svg').default,
    description: (
      <>
        Save storage costs by offloading log segments to the cloud.
      </>
    ),
    url: '/docs/data-management/tiered-storage',
  },
  {
    title: 'Sizing Guidelines',
    Svg: require('../../../static/img/get-started.svg').default,
    description: (
      <>
        Size your production clusters to maximize performance.
      </>
    ),
    url: 'https://redpanda.com/blog/sizing-redpanda-cluster-best-practices',
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.padding}>
      <div className={styles.border}>
          <div className="text--center">
            <a href={url}>
            <Svg className={styles.featureSvg} alt={title} />
            </a>
          </div>
        <div className="text--left padding-horiz--md">
          <a href={url}>
          <span className={styles.body_title}>{title}</span> 
          </a> 
          <div className={styles.body_text}>
          
          
          <p>{description}</p>
          <div>
            <a href={url}><p>Learn more -> </p></a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div class={clsx('border border-primary')}>
      <div className="container">
        <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        </div>
    </section>
  );
}