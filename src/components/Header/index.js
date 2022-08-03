import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import Icon from '../IconsGenerator';
import Search from '../Search';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <Icon name="logo"></Icon>
          </Link>
          <Search />
          <Link to="/cart" className={styles.cart}>
            <span>1000 $</span>
            <Icon name="cart"></Icon>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
