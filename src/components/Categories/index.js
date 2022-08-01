import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? styles.active : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
