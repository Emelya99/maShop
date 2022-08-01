import React from 'react';
import styles from '../Product/Product.module.scss';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className={styles.product}
    speed={2}
    width={295}
    height={466}
    viewBox="0 0 295 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="56" y="43" rx="0" ry="0" width="1" height="54" />
    <rect x="0" y="0" rx="0" ry="0" width="295" height="295" />
    <rect x="0" y="309" rx="15" ry="15" width="295" height="24" />
    <rect x="0" y="349" rx="15" ry="15" width="295" height="55" />
    <rect x="-1" y="427" rx="15" ry="15" width="120" height="25" />
    <rect x="170" y="422" rx="15" ry="15" width="120" height="39" />
  </ContentLoader>
);

export default Skeleton;
