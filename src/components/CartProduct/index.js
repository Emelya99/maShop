import React from 'react';
import Icon from '../IconsGenerator';
import styles from './CartProduct.module.scss';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, onMinusCount } from '../../redux/slices/cartSlice';

const CartProduct = ({ id, title, count, price, imgUrl, imgAlt, size }) => {
  const dispatch = useDispatch();

  const onClickRemoveItem = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removeItem({ id, size }));
    }
  };

  const clickAddCount = () => {
    dispatch(
      addItem({
        id,
        size,
      }),
    );
  };

  const clickMinusCount = () => {
    dispatch(onMinusCount({ id, size }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img src={imgUrl} alt={imgAlt} />
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
