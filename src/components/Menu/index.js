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
import { setCategory } from '../../redux/slices/filterSlice';

const Menu = () => {
  const { activeCategory, sort, searchValue, currentPaginationNumber } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);
  const [currentProduct, setCurrentProduct] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };

  React.useEffect(() => {
    setIsLoading(true);
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortValue = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://62e76c9f93938a545bd1363a.mockapi.io/product?page=${currentPaginationNumber}&limit=8&${category}&sortBy=${sortValue}&order=${order}&search=${searchValue}`,
      )
      .then((res) => {
        setProducts(res.data.items);
        setCurrentProduct(res.data.count);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, sort, currentPaginationNumber, searchValue, currentProduct]);

  const countPage = Math.ceil(currentProduct / 8);
  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const productRender = products
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
