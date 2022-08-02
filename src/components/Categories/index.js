import React from 'react';
import { MenuContext } from '../../App';
import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const { setCurrentPage } = React.useContext(MenuContext);
  const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

  const onClickCategory = (index) => {
    onChangeCategory(index);
    setCurrentPage(1);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? styles.active : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
