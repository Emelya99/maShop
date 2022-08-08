import React from 'react';
import styles from './Product.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

const Product = ({ id, title, acf }) => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === allSizesProduct[sizeActive]),
  );
  const dispatch = useDispatch();

  const allSizesProduct = [];
  allSizesProduct.push(acf.sizes);
  allSizesProduct.push(acf.sizes2);
  allSizesProduct.push(acf.sizes3);

  const allPriceProduct = [];
  allPriceProduct.push(acf.price);
  allPriceProduct.push(acf.price2);
  allPriceProduct.push(acf.price3);

  const addedCount = cartItem ? cartItem.count : 0;
  const priceActive = Boolean(allPriceProduct[sizeActive])
    ? allPriceProduct[sizeActive]
    : acf.price;
  const activeSize = Boolean(allSizesProduct[sizeActive]) ? allSizesProduct[sizeActive] : null;
  console.log(activeSize, priceActive);

  const onClickAddItem = () => {
    const obj = {
      id,
      title: title.rendered,
      // imgUrl,
      price: priceActive,
      size: activeSize,
    };
    dispatch(addItem(obj));
  };

  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <div className={styles.img}>
          <img src="/img/1.jpg" alt="product" />
        </div>
        <div className={styles.title}>{title.rendered}</div>
      </div>
      <div>
        {allSizesProduct.length > 0 ? (
          <div className={styles.variables}>
            {allSizesProduct.map((size, index) => (
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
