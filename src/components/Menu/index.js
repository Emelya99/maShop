import React from 'react';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Products from '../Products';
import Pagination from '../Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory, filterSelector } from '../../redux/slices/filterSlice';
import { fetchProducts, productSelector } from '../../redux/slices/productSlice';

const Menu = () => {
  const { activeCategory, sort, searchValue, currentPaginationNumber } =
    useSelector(filterSelector);
  const { allProduct, currentProductOnPage, limitPage } = useSelector(productSelector);
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
  const productRender = allProduct
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((product) => <Product key={product.id} {...product} />);

  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort />
      </div>
      <Categories value={activeCategory} onChangeCategory={onChangeCategory} />
      <Products productRender={productRender} limitPage={limitPage} />
      {productRender.length === limitPage || currentPaginationNumber > 1 ? (
        <Pagination countPage={countPage} />
      ) : null}
    </>
  );
};

export default Menu;
