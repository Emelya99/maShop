import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../../redux/slices/cartSlice';

import styles from './Header.module.scss';

import Icon from '../IconsGenerator';
import Search from '../Search';

const Header = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  React.useEffect(() => {
    axios.get(`https://62e76c9f93938a545bd1363a.mockapi.io/cart`).then((res) => {
      dispatch(getItems(res.data));
    });
  }, [dispatch]);

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
