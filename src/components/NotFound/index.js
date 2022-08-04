import Title from '../Title';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Not found page" />
      <Link to="/" className="btn">
        Go menu
      </Link>
    </div>
  );
};

export default Cart;
