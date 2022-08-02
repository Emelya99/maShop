import React from 'react';
import axios from 'axios';

import styles from './Menu.module.scss';

import Title from '../Title';
import Sort from '../Sort';
import Categories from '../Categories';
import Product from '../Product';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';

const Menu = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [currentProduct, setCurrentProduct] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeSort, setActiveSort] = React.useState({
    name: 'popularity (↓)',
    sortProperty: 'rating',
  });

  const countPage = Math.ceil(currentProduct / 8);

  console.log(countPage);

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sort = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://62e76c9f93938a545bd1363a.mockapi.io/product?page=${currentPage}&limit=8&${category}&sortBy=${sort}&order=${order}`,
      )
      .then((res) => {
        setProducts(res.data.items);
        setCurrentProduct(res.data.count);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, currentPage]);

  return (
    <>
      <div className={styles.topWrapper}>
        <Title title="Menu" />
        <Sort value={activeSort} onChangeSort={(obj) => setActiveSort(obj)} />
      </div>
      <Categories value={activeCategory} onChangeCategory={setActiveCategory} />
      <div className={styles.products}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : products.map((product) => <Product key={product.id} {...product} />)}
      </div>
      {countPage === 1 ? null : <Pagination countPage={countPage} onChangePage={setCurrentPage} />}
    </>
  );
};

export default Menu;
