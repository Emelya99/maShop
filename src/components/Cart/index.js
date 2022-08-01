import React from 'react';
import Title from '../Title';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.topWrapper}>
      <Title title="Cart" />
      <p>Delete all</p>
    </div>
  );
};

export default Cart;
