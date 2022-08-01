import React from 'react';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import axios from 'axios';

const Menu = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://62e76c9f93938a545bd1363a.mockapi.io/product').then((res) => {
      setProducts(res.data);
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
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Menu;
