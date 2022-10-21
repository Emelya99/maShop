import React from 'react';
import Icon from '../IconsGenerator';
import Title from '../Title';
import styles from './Cart.module.scss';
import CartProduct from '../CartProduct';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, cartSelector } from '../../redux/slices/cartSlice';
import CartEmpty from '../CartEmpty';

const Cart = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onRemoveAllProduct = () => {
    if (window.confirm('Empty shopping cart?')) {
      dispatch(clearItems());
    }
  };

  const onClickPay = (e) => {
    alert('Unfortunately "Pay" is under development.');
    e.preventDefault();
  };

  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.topWrapper}>
        <Title title="Cart" />
        <p onClick={onRemoveAllProduct}>
          <Icon name="delete-all" />
          Delete all
        </p>
      </div>
      <div className={styles.products}>
        {items.map((obj, index) => (
          <CartProduct key={index} {...obj} />
        ))}
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.left}>
          <p>
            Total Products: <span>{totalCount} things</span>
          </p>
          <Link to="/">
            <Icon name="arrow-back" />
            Сome back
          </Link>
        </div>
        <div className={styles.right}>
          <p>
            Order price: <span>{totalPrice} $</span>
          </p>
          <Link to="/" onClick={onClickPay}>
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
