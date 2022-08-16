import React from 'react';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import { fetchProducts } from '../../redux/slices/productSlice';

const Menu = () => {
  const { activeCategory, sort, searchValue, currentPaginationNumber } = useSelector(
    (state) => state.filter,
  );
  const { allProduct, isLoading, currentProductOnPage, limitPage } = useSelector(
    (state) => state.product,
  );
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };

  React.useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortValue = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchProducts({
        category,
        sortValue,
        order,
        currentPaginationNumber,
        limitPage,
        searchValue,
      }),
    );
    window.scrollTo(0, 0);
  }, [
    activeCategory,
    sort,
    currentPaginationNumber,
    searchValue,
    currentProductOnPage,
    limitPage,
    dispatch,
  ]);

  const countPage = Math.ceil(currentProductOnPage / limitPage);
  const skeleton = [...new Array(limitPage)].map((_, index) => <Skeleton key={index} />);
  const productRender = allProduct
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((product) => <Product key={product.id} {...product} />);

  console.log(productRender);

  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort />
      </div>
      <Categories value={activeCategory} onChangeCategory={onChangeCategory} />
      <div className={styles.products}>
        {isLoading === 'loading' ? skeleton : productRender}
        {isLoading === 'success' && productRender.length === 0 && (
          <p className={styles.nothing}>Nothing found</p>
        )}
        {isLoading === 'error' && <p className={styles.nothing}>Server error. Try later please.</p>}
      </div>
      {productRender.length === 12 || currentPaginationNumber > 1 ? (
        <Pagination countPage={countPage} />
      ) : null}
    </>
  );
};

export default Menu;
