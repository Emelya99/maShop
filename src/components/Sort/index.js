import Icon from '../IconsGenerator';
import styles from './Sort.module.scss';
import React from 'react';

const Sort = () => {
  const [openSort, setOpenSort] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);

  const sort = ['popularity', 'price', 'alphabet'];

  const onClickSortItem = (index) => {
    setActiveSort(index);
    setOpenSort(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortContent} onClick={() => setOpenSort(!openSort)}>
        {openSort ? <Icon name="sort-close" /> : <Icon name="sort-open" />}
        <p>
          Sort by:<span>{sort[activeSort]}</span>
        </p>
      </div>
      {openSort && (
        <div className={styles.sortBox}>
          <ul>
            {sort.map((item, index) => (
              <li
                onClick={() => onClickSortItem(index)}
                key={index}
                className={activeSort === index ? styles.active : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
