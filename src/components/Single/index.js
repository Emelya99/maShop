import React from 'react';

import SimilarProducts from '../SimilarProducts';
import SingleProduct from '../SingleProduct';

import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productSelector } from '../../redux/slices/productSlice';

import axios from 'axios';

const Single = () => {
  const [product, setProduct] = React.useState();
  const [products, setProducts] = React.useState();

  const { similarLimitPage } = useSelector(productSelector);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const getProduct = await axios.get(
          `https://62e76c9f93938a545bd1363a.mockapi.io/product/${id}`,
        );
        const getProducts = await axios.get(
          `https://62e76c9f93938a545bd1363a.mockapi.io/product?category=${getProduct.data.category}`,
        );
        setProduct(getProduct.data);
        setProducts(getProducts.data.items);
      } catch {
        alert('Sorry, the product could not be found.');
        navigate('/');
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id, navigate, similarLimitPage]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SingleProduct product={product} />
      <SimilarProducts products={products} id={id} />
    </>
  );
};

export default Single;
