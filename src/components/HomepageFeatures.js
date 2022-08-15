import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Get started with Redpanda</Translate>,
    Svg: require('../../static/img/Redpanda Rocket.svg').default,
    description: (
      <Translate>
        Redpanda was designed from the ground up to be easily installed
        to get streaming up and running quickly.
      </Translate>
    ),
    url: '/docs/quickstart/',
  },
  {
    title: 'Deploy Redpanda in production',
    Svg: require('../../static/img/Redpanda Sitting.svg').default,
    href: `/docs/deploy-self-hosted/production-deployment`,
    description: (
      <>
        After you see its power, put Redpanda to the test in production.
      </>
    ),
    url: '/docs/deployment/production-deployment',
  },
  {
    title: 'Dive deeper into Redpanda',
    Svg: require('../../static/img/Redpanda Transporter.svg').default,
    description: (
      <>
        Use the more advanced Redpanda features...
      </>
    ),
    url: '/docs/reference/rpk-commands',
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={url}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <a href={url}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
