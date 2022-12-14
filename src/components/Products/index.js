import styles from './Products.module.scss';
import Skeleton from '../Menu/Skeleton';

const Products = ({ productRender, limitPage, isLoading }) => {
  const skeleton = [...new Array(limitPage)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.products}>
      {isLoading === 'loading' ? skeleton : productRender}
      {isLoading === 'success' && productRender.length === 0 && (
        <p className={styles.nothing}>Nothing found</p>
      )}
      {isLoading === 'error' && <p className={styles.nothing}>Server error. Try later please.</p>}
    </div>
  );
};

export default Products;
