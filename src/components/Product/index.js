import React from 'react';
import styles from './Product.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

const Product = ({ id, title, imgUrl, sizes, price, singlePrice }) => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === sizes[sizeActive]),
  );
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;
  const priceActive = price ? price[sizeActive] : singlePrice;

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
        <div className={styles.img}>
          <img src={imgUrl} alt="product" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        {sizes.length > 0 && (
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
