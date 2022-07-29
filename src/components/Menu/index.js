import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';

const Menu = () => {
  return (
    <div className={styles.topWrapper}>
      <Title title="Menu" />
      <Sort />
    </div>
  );
};

export default Menu;
