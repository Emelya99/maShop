import React from 'react';
import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

  const onClickCategory = (index) => {
    onChangeCategory(index);
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
