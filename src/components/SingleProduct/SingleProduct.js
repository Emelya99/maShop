import React from 'react';
import styles from './SingleProduct.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductSizes from '../ProductSizes';
import ProductAddToCart from '../ProductAddToCart';

const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Salads', 'Drinkables'];

const SingleProduct = () => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const [product, setProduct] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://62e76c9f93938a545bd1363a.mockapi.io/product/${id}`,
        );
        setProduct(data);
      } catch {
        alert('Sorry, the product could not be found.');
        navigate('/');
      }
    };
    fetchProduct();
  }, [id, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const priceActive = product.price ? product.price[sizeActive] : product.singlePrice;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={product.imgUrl} alt="product" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.priceBox}>
            <p className={styles.price}>{priceActive} $</p>
            {product.sizes.length > 0 && (
              <div className={styles.variables}>
                <ProductSizes
                  sizes={product.sizes}
                  sizeActive={sizeActive}
                  setSizeActive={setSizeActive}
                />
              </div>
            )}
          </div>
          <p className={styles.desc}>{product.desc}</p>
          <div className={styles.addToCart}>
            <ProductAddToCart
              id={product.id}
              title={product.title}
              imgUrl={product.imgUrl}
              sizes={product.sizes}
              sizeActive={sizeActive}
              priceActive={priceActive}
            />
          </div>
          <ul className={styles.properties}>
            <li>SKU: {product.id}</li>
            <li>Category: {categories[product.category]}</li>
            <li>Rating: {product.rating}/10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
