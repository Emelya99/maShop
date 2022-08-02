import React from 'react';
import { MenuContext } from '../../App';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

import Icon from '../IconsGenerator';

const Pagination = ({ countPage }) => {
  const { setCurrentPage } = React.useContext(MenuContext);
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.pagination}
      nextLabel={<Icon name="arrow-right" />}
      previousLabel={<Icon name="arrow-left" />}
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={countPage}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
