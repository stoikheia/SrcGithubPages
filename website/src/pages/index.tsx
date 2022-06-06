import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Parallax } from 'react-parallax';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.headerBackground)}>
      <div style={{width: '100%'}}>
      <Parallax bgImage="/img/pages/DSC03961.jpg" strength={300} style={{
        height: '100%',
        backgroundSize: 'cover',
      }}>
      <div className={clsx('container', styles.headerMargin)}>
        <div className={styles.headerTop}></div>
        <h1 className={clsx('hero__title')}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle')}>{siteConfig.tagline}</p>
        <div className={styles.headerBottom}></div>
      </div>
      </Parallax>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
