import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? styles.active : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
