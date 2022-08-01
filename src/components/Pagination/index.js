import React from 'react';
import styles from './Pagination.module.scss';

import Icon from '../IconsGenerator';

const Pagination = () => {
  const [page, setPage] = React.useState(0);

  const pageCount = ['1', '2', '3'];

  return (
    <ul className={styles.pagination}>
      <li>
        <Icon name="arrow-left" />
      </li>
      {pageCount.map((item, index) => (
        <li onClick={() => setPage(index)} className={page === index ? styles.active : ''}>
          {item}
        </li>
      ))}
      <li>
        <Icon name="arrow-right" />
      </li>
    </ul>
  );
};

export default Pagination;
