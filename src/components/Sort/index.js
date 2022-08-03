import Icon from '../IconsGenerator';
import styles from './Sort.module.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const sort = [
  { name: 'popularity (↓)', sortProperty: 'rating' },
  { name: 'popularity (↑)', sortProperty: '-rating' },
  { name: 'price (↓)', sortProperty: 'price' },
  { name: 'price (↑)', sortProperty: '-price' },
  { name: 'alphabet', sortProperty: '-title' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.sort.name);
  const [openSort, setOpenSort] = React.useState(false);

  const onClickSortItem = (obj) => {
    dispatch(setSort(obj));
    setOpenSort(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortContent} onClick={() => setOpenSort(!openSort)}>
        {openSort ? <Icon name="sort-close" /> : <Icon name="sort-open" />}
        <p>
          Sort by:<span>{value}</span>
        </p>
      </div>
      {openSort && (
        <div className={styles.sortBox}>
          <ul>
            {sort.map((obj, index) => (
              <li
                onClick={() => onClickSortItem(obj)}
                key={index}
                className={value === obj.name ? styles.active : ''}>
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
