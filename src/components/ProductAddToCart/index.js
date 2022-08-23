import styles from './ProductAddToCart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const ProductAddToCart = ({ id, title, imgUrl, priceActive, sizes, sizeActive }) => {
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id && obj.size === sizes[sizeActive]),
  );
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;

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
    <button className={styles.btn} onClick={onClickAddItem}>
      + Add {addedCount > 0 && <span>{addedCount}</span>}
    </button>
  );
};

export default ProductAddToCart;
