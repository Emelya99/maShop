import React from 'react';
import styles from './Categories.module.scss';

import { useSelector } from 'react-redux';
import { productSelector } from '../../redux/slices/productSlice';

const Categories = ({ value, onChangeCategory }) => {
  const { categories } = useSelector(productSelector);

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
