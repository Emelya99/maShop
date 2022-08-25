import React from 'react';

import SimilarProducts from '../SimilarProducts';
import SingleProduct from '../SingleProduct';

import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productSelector } from '../../redux/slices/productSlice';

import axios from 'axios';

const Single = () => {
  const [isLoading, setIsLoading] = React.useState('loading');
  const [product, setProduct] = React.useState();
  const [products, setProducts] = React.useState();

  const { similarLimitPage } = useSelector(productSelector);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading('loading');
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
        setIsLoading('success');
      } catch {
        alert('Sorry, the product could not be found.');
        navigate('/');
        setIsLoading('error');
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id, navigate, similarLimitPage]);

  if (isLoading === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SingleProduct product={product} />
      <SimilarProducts products={products} id={id} isLoading={isLoading} />
    </>
  );
};

export default Single;
