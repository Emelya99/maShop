import styles from './ProductSizes.module.scss';

const ProductSizes = ({ sizes, sizeActive, setSizeActive }) => {
  return (
    <div className={styles.variables}>
      {sizes.map((size, index) => (
        <p
          key={index}
          onClick={() => setSizeActive(index)}
          className={sizeActive === index ? styles.active : ''}>
          {size}
        </p>
      ))}
    </div>
  );
};

export default ProductSizes;
