import React from 'react';
import styles from './Product.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

const Product = ({ id, title, imgUrl, sizes, price }) => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;
  const priceActive = Boolean(price[sizeActive]) ? price[sizeActive] : price;

  const onClickAddItem = () => {
    const obj = {
      id,
      title,
      imgUrl,
      price: priceActive,
      size: sizes[sizeActive],
    };
    dispatch(addItem(obj));
  };

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
        {sizes.length > 0 ? (
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
        ) : (
          <div className={styles.variablesEmpty}></div>
        )}
        <div className={styles.bottom}>
          <button onClick={onClickAddItem}>
            + Add {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          <p>{priceActive} $</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
