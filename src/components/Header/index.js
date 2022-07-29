import styles from './Header.module.scss';

import Icon from '../IconsGenerator';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="/">
            <Icon name="logo"></Icon>
          </a>
          <div className={styles.input}>
            <input className={styles.input} type="text" placeholder="Search..." />
            <Icon name="close"></Icon>
          </div>
          <div className={styles.cart}>
            <span>1000 $</span>
            <Icon name="cart"></Icon>
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
