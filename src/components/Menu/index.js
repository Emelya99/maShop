import React from 'react';
import axios from 'axios';

import styles from './Menu.module.scss';

import { MenuContext } from '../../App';
import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';

const Menu = () => {
  const { searchValue, currentPage } = React.useContext(MenuContext);
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [currentProduct, setCurrentProduct] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'popularity (↓)',
    sortProperty: 'rating',
  });

  const countPage = Math.ceil(currentProduct / 8);
  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const productRender = products
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((product) => <Product key={product.id} {...product} />);

  React.useEffect(() => {
    setIsLoading(true);
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sort = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://62e76c9f93938a545bd1363a.mockapi.io/product?page=${currentPage}&limit=8&${category}&sortBy=${sort}&order=${order}&search=${searchValue}`,
      )
      .then((res) => {
        setProducts(res.data.items);
        setCurrentProduct(res.data.count);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, currentPage, searchValue, currentProduct]);

  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort value={activeSort} onChangeSort={(obj) => setActiveSort(obj)} />
      </div>
      <Categories value={activeCategory} onChangeCategory={setActiveCategory} />
      <div className={styles.products}>{isLoading ? skeleton : productRender}</div>
      {countPage === 1 ? null : <Pagination countPage={countPage} />}
    </>
  );
};

export default Menu;
