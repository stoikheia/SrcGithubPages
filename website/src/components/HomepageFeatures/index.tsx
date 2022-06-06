import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'マルチメディア開発',
    Svg: require('@site/static/img/pages/CameraLens1.svg').default,
    description: (
<>
<b>動画、音声</b><br/>
エンコードアプリケーション開発<br/>
プレイヤー開発<br/>
<b>2Dグラフィック</b><br/>
フィルタ処理<br/>
リアルタイムエフェクト<br/>
<b>3Dグラフィック</b><br/>
DirectX<br/>
OpenGL<br/>
GLSL<br/>
</>
    ),
  },
  {
    title: 'Webシステム開発',
    Svg: require('@site/static/img/pages/clowd1_6.svg').default,
    description: (
      <>
サーバー設計、実装<br/>
クラウド利用<br/>
DB設計<br/>
パフォーマンスチューニング<br/>
      </>
    ),
  },
  {
    title: 'ライブラリ開発',
    Svg: require('@site/static/img/pages/library1.svg').default,
    description: (
      <>
プロトコルスタック<br/>
符号化アルゴリズム<br/>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
