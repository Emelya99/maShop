import React from 'react';

import styles from './SimilarProducts.module.scss';

import Title from '../Title';
import Product from '../Product';
import Products from '../Products';

import { useSelector } from 'react-redux';
import { productSelector } from '../../redux/slices/productSlice';

const SimilarProducts = ({ products, id, isLoading }) => {
  const { similarLimitPage } = useSelector(productSelector);

  const productRender = products
    .filter((obj) => obj.id !== id)
    .sort(() => Math.random() - Math.random())
    .slice(0, similarLimitPage)
    .map((product) => <Product key={product.id} {...product} />);

  return (
    <div className={styles.wrapper}>
      <Title title="Similar products" />
      <Products productRender={productRender} limitPage={similarLimitPage} isLoading={isLoading} />
    </div>
  );
};

export default SimilarProducts;
