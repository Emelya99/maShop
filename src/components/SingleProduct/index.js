import React from 'react';
import styles from './SingleProduct.module.scss';
import ProductSizes from '../ProductSizes';
import ProductAddToCart from '../ProductAddToCart';

const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

const SingleProduct = ({
  id,
  title,
  imgUrl,
  sizes,
  price,
  singlePrice,
  desc,
  rating,
  category,
}) => {
  const [sizeActive, setSizeActive] = React.useState(0);

  const priceActive = price ? price[sizeActive] : singlePrice;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={imgUrl} alt="product" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.priceBox}>
            <p className={styles.price}>{priceActive} $</p>
            {sizes.length > 0 && (
              <div className={styles.variables}>
                <ProductSizes sizes={sizes} sizeActive={sizeActive} setSizeActive={setSizeActive} />
              </div>
            )}
          </div>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.addToCart}>
            <ProductAddToCart
              id={id}
              title={title}
              imgUrl={imgUrl}
              sizes={sizes}
              sizeActive={sizeActive}
              priceActive={priceActive}
            />
          </div>
          <ul className={styles.properties}>
            <li>SKU: {id}</li>
            <li>Category: {categories[category]}</li>
            <li>Rating: {rating}/10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
