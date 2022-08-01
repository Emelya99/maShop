import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import Icon from '../IconsGenerator';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <Icon name="logo"></Icon>
          </Link>
          <div className={styles.input}>
            <input className={styles.input} type="text" placeholder="Search..." />
            <Icon name="close"></Icon>
          </div>
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
