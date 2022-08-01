import styles from './Product.module.scss';

const Product = () => {
  return (
    <div className={styles.product}>
      <a href="/">
        <img src="img/1.jpg" alt="product" />
      </a>
      <a className={styles.title} href="/">
        Mexican pizza
      </a>
      <div className={styles.variables}>
        <p className={styles.active}>30⌀</p>
        <p>40⌀</p>
      </div>
      <div className={styles.bottom}>
        <p>From 200 $</p>
        <button>
          + Add<span>1</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
