import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalPrice, cartSelector } from '../../redux/slices/cartSlice';

import styles from './Header.module.scss';

import Icon from '../IconsGenerator';
import Search from '../Search';

const Header = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const isMounted = React.useRef(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
    dispatch(getTotalPrice());
  }, [items, dispatch]);

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
