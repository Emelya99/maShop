import React from 'react';
import Icon from '../IconsGenerator';
import styles from './CartProduct.module.scss';

const CartProduct = () => {
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img src="img/1.jpg" alt="product" />
        <div className={styles.info}>
          <h3>Mexican pizza</h3>
          <p>30см</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.count}>
          <button>
            <Icon name="minus" />
          </button>
          <span>1</span>
          <button>
            <Icon name="plus" />
          </button>
        </div>
        <p className={styles.price}>200 $</p>
        <div className={styles.delete}>
          <Icon name="delete-single" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
