import Icon from '../IconsGenerator';
import Title from '../Title';
import styles from './Cart.module.scss';
import CartProduct from '../CartProduct';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.topWrapper}>
        <Title title="Cart" />
        <p>
          <Icon name="delete-all" />
          Delete all
        </p>
      </div>
      <div className={styles.products}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.left}>
          <p>
            Total Products: <span>3 things</span>
          </p>
          <Link to="/">
            <Icon name="arrow-back" />
            Сome back
          </Link>
        </div>
        <div className={styles.right}>
          <p>
            Order price: <span>1000 $</span>
          </p>
          <Link to="/">Pay</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
