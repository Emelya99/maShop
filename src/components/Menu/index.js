import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';

const Menu = () => {
  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort />
      </div>
      <Categories />
    </>
  );
};

export default Menu;
