import React from 'react';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

import ProductAddToCart from '../ProductAddToCart';
import ProductSizes from '../ProductSizes';

const Product = ({ id, title, imgUrl, sizes, price, singlePrice }) => {
  const [sizeActive, setSizeActive] = React.useState(0);

  const priceActive = price ? price[sizeActive] : singlePrice;

  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <Link to={`/${id}`} className={styles.img}>
          <img src={imgUrl} alt="product" />
        </Link>
        <Link to={`/${id}`} className={styles.title}>
          {title}
        </Link>
      </div>
      <div>
        {sizes.length > 0 && (
          <ProductSizes sizes={sizes} sizeActive={sizeActive} setSizeActive={setSizeActive} />
        )}
        <div className={styles.bottom}>
          <ProductAddToCart
            id={id}
            title={title}
            imgUrl={imgUrl}
            sizes={sizes}
            sizeActive={sizeActive}
            priceActive={priceActive}
          />
          <p>{priceActive} $</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
