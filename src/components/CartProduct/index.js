import React from 'react';
import Icon from '../IconsGenerator';
import styles from './CartProduct.module.scss';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, onMinusCount } from '../../redux/slices/cartSlice';
import axios from 'axios';

const CartProduct = ({ id, title, count, price, imgUrl, size }) => {
  const dispatch = useDispatch();

  const onClickRemoveItem = async () => {
    if (window.confirm('Are you sure you want to delete?')) {
      await axios.delete(`https://62e76c9f93938a545bd1363a.mockapi.io/cart/${id}`);
      dispatch(removeItem(id));
    }
  };

  const clickAddCount = async () => {
    await axios.put(`https://62e76c9f93938a545bd1363a.mockapi.io/cart/${id}`, {
      count: count + 1,
    });
    dispatch(
      addItem({
        id,
      }),
    );
  };

  const clickMinusCount = async () => {
    await axios.put(`https://62e76c9f93938a545bd1363a.mockapi.io/cart/${id}`, {
      count: count - 1,
    });
    dispatch(onMinusCount(id));
  };

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img src={imgUrl} alt={title} />
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{size}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.count}>
          <button onClick={clickMinusCount} className={count === 1 ? styles.disabled : ''}>
            <Icon name="minus" />
          </button>
          <span>{count}</span>
          <button onClick={clickAddCount}>
            <Icon name="plus" />
          </button>
        </div>
        <p className={styles.price}>{price * count} $</p>
        <div onClick={onClickRemoveItem} className={styles.delete}>
          <Icon name="delete-single" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
