import React from 'react';
import styles from './Product.module.scss';

const Product = ({ title, imgUrl, sizes, price }) => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const [addCartCount, setAddCartCount] = React.useState(1);

  const sizesProduct = ['26⌀', '30⌀', '40⌀'];

  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <a href="/">
          <img src={imgUrl} alt="product" />
        </a>
        <a className={styles.title} href="/">
          {title}
        </a>
      </div>
      <div>
        <div className={styles.variables}>
          {sizes.map((size, index) => (
            <p
              key={index}
              onClick={() => setSizeActive(index)}
              className={sizeActive === index ? styles.active : ''}>
              {sizesProduct[size]}
            </p>
          ))}
        </div>
        <div className={styles.bottom}>
          <p>From {price} $</p>
          <button onClick={() => setAddCartCount((prev) => prev + 1)}>
            + Add<span>{addCartCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
