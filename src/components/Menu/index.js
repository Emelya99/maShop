import React from 'react';
import axios from 'axios';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';

const Menu = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://62e76c9f93938a545bd1363a.mockapi.io/product').then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort />
      </div>
      <Categories />
      <div className={styles.products}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : products.map((product) => <Product key={product.id} {...product} />)}
      </div>
      <Pagination />
    </>
  );
};

export default Menu;
