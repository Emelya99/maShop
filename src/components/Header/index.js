import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';

import Icon from '../IconsGenerator';
import Search from '../Search';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link className={styles.logo} to="/">
            <Icon name="logo"></Icon>
          </Link>
          <Search />
          <Link to="/cart" className={styles.cart}>
            <span>{totalPrice} $</span>
            <Icon name="cart"></Icon>
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
