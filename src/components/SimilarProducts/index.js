import React from 'react';

import styles from './SimilarProducts.module.scss';

import Title from '../Title';
import Product from '../Product';
import Products from '../Products';

import { useSelector, useDispatch } from 'react-redux';
import { similarSelector } from '../../redux/slices/similarSlice';

import { fetchSimilarProducts } from '../../redux/slices/similarSlice';

const SimilarProducts = () => {
  const { similarLimitPage, isLoading, similarProducts } = useSelector(similarSelector);
  const { id, category } = useSelector((state) => state.single.singleProduct);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSimilarProducts({ category }));
  }, [category, dispatch]);

  const productRender = similarProducts
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
