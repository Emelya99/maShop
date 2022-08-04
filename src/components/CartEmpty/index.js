import React from 'react';
import Icon from '../IconsGenerator';
import Title from '../Title';
import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <Icon name="empty-cart" />
      <Title title="Cart empty" />
      <Link to="/" className="btn">
        Go menu
      </Link>
    </div>
  );
};

export default CartEmpty;
