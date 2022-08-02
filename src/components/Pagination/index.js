import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

import Icon from '../IconsGenerator';

const Pagination = ({ onChangePage, countPage }) => {
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
  );
};

export default Pagination;
