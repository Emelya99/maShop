import React from 'react';
import axios from 'axios';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setCurrentProductOnPage } from '../../redux/slices/filterSlice';
import { setAllProduct } from '../../redux/slices/productSlice';

const Menu = () => {
  const { activeCategory, sort, searchValue, currentPaginationNumber, currentProductOnPage } =
    useSelector((state) => state.filter);
  const { allProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortValue = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    async function fetchData() {
      try {
        const res = await axios.get(
          `https://62e76c9f93938a545bd1363a.mockapi.io/product?page=${currentPaginationNumber}&limit=8&${category}&sortBy=${sortValue}&order=${order}&search=${searchValue}`,
        );
        dispatch(setAllProduct(res.data.items));
        dispatch(setCurrentProductOnPage(res.data.count));
        window.scrollTo(0, 0);
      } catch (err) {
        alert('Error when receiving products');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [activeCategory, sort, currentPaginationNumber, searchValue, currentProductOnPage, dispatch]);

  const countPage = Math.ceil(currentProductOnPage / 8);
  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
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
      <div className={styles.products}>
        {isLoading ? skeleton : productRender}
        {productRender.length === 0 && <p className={styles.nothing}>Nothing found</p>}
      </div>
      {countPage === 1 ? null : <Pagination countPage={countPage} />}
    </>
  );
};

export default Menu;
