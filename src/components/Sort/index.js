import Icon from '../IconsGenerator';
import styles from './Sort.module.scss';
import React from 'react';

const Sort = ({ value, onChangeSort }) => {
  const [openSort, setOpenSort] = React.useState(false);

  const sort = [
    { name: 'popularity (↓)', sortProperty: 'rating' },
    { name: 'popularity (↑)', sortProperty: '-rating' },
    { name: 'price (↓)', sortProperty: 'price' },
    { name: 'price (↑)', sortProperty: '-price' },
    { name: 'alphabet', sortProperty: '-title' },
  ];

  const onClickSortItem = (obj) => {
    onChangeSort(obj);
    setOpenSort(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortContent} onClick={() => setOpenSort(!openSort)}>
        {openSort ? <Icon name="sort-close" /> : <Icon name="sort-open" />}
        <p>
          Sort by:<span>{value.name}</span>
        </p>
      </div>
      {openSort && (
        <div className={styles.sortBox}>
          <ul>
            {sort.map((obj, index) => (
              <li
                onClick={() => onClickSortItem(obj)}
                key={index}
                className={value.name === obj.name ? styles.active : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
