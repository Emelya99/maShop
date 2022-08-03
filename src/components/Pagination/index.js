import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import Icon from '../IconsGenerator';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPaginationNumber } from '../../redux/slices/filterSlice';

const Pagination = ({ countPage }) => {
  const currentPaginationNumber = useSelector((state) => state.filter.currentPaginationNumber);
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.pagination}
      nextLabel={<Icon name="arrow-right" />}
      previousLabel={<Icon name="arrow-left" />}
      onPageChange={(event) => dispatch(setCurrentPaginationNumber(event.selected + 1))}
      pageRangeDisplayed={8}
      forcePage={currentPaginationNumber - 1}
      pageCount={countPage}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
