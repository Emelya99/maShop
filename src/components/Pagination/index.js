// import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

import Icon from '../IconsGenerator';

const Pagination = ({ onChangePage, countPage }) => {
  // const [page, setPage] = React.useState(0);

  // const pageCount = ['1', '2', '3'];

  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.pagination}
      nextLabel={<Icon name="arrow-right" />}
      previousLabel={<Icon name="arrow-left" />}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={countPage}
      renderOnZeroPageCount={null}
    />

    // <ul className={styles.pagination}>
    //   <li>
    //     <Icon name="arrow-left" />
    //   </li>
    //   {pageCount.map((item, index) => (
    //     <li
    //       key={index}
    //       onClick={() => setPage(index)}
    //       className={page === index ? styles.active : ''}>
    //       {item}
    //     </li>
    //   ))}
    //   <li>
    //     <Icon name="arrow-right" />
    //   </li>
    // </ul>
  );
};

export default Pagination;
