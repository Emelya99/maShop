import React from 'react';
import Icon from '../IconsGenerator';
import Title from '../Title';
import styles from './Cart.module.scss';
import CartProduct from '../CartProduct';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';
import CartEmpty from '../CartEmpty';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onRemoveAllProduct = async () => {
    if (window.confirm('Empty shopping cart?')) {
      console.log(items);
      // await axios.delete(`https://62e76c9f93938a545bd1363a.mockapi.io/cart/`);
      dispatch(clearItems());
    }
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
        {items.map((obj) => (
          <CartProduct key={obj.id} {...obj} />
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
          {}
          <Link to="/">Pay</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
