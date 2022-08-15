import React from 'react';
import styles from './Product.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

const Product = ({ id, acf }) => {
  const [sizeActive, setSizeActive] = React.useState(0);

  const allSizesProduct = Object.values(acf.sizes);
  const filteredSizeProduct = allSizesProduct.filter((e) => e);
  const allPriceProduct = Object.values(acf.price);
  const filteredPriceProduct = allPriceProduct.filter((e) => e);
  const currentProductPrice =
    filteredPriceProduct.length === 0 ? acf.single_price : filteredPriceProduct[sizeActive];

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === filteredSizeProduct[sizeActive]),
  );
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItem = () => {
    const obj = {
      id,
      title: acf.title,
      imgUrl: acf.image.url,
      imgAlt: acf.image.alt,
      price: currentProductPrice,
      size: filteredSizeProduct[sizeActive],
    };
    dispatch(addItem(obj));
  };

  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <div className={styles.img}>
          <img src={acf.image.url} alt={acf.image.alt} />
        </div>
        <div className={styles.title}>{acf.title}</div>
      </div>
      <div>
        {filteredSizeProduct.length > 0 && (
          <div className={styles.variables}>
            {filteredSizeProduct.map((size, index) => (
              <p
                key={index}
                onClick={() => setSizeActive(index)}
                className={sizeActive === index ? styles.active : ''}>
                {size}
              </p>
            ))}
          </div>
        )}
        <div className={styles.bottom}>
          <button onClick={onClickAddItem}>
            + Add {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          <p>{currentProductPrice} $</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
