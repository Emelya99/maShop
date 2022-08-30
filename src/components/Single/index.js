import React from 'react';

import SingleProduct from '../SingleProduct';
// import SimilarProducts from '../SimilarProducts';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../redux/slices/singleSlice';

const Single = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // const fetchProduct = async () => {
    //   try {
    //     const getProducts = await axios.get(
    //       `https://62e76c9f93938a545bd1363a.mockapi.io/product?category=${getProduct.data.category}`,
    //     );
    //     setProducts(getProducts.data.items);
    //   } catch {
    //     alert('Sorry, the product could not be found.');
    //     navigate('/');
    //   }
    // };
    dispatch(fetchSingleProduct({ id }));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <SingleProduct />
      {/* <SimilarProducts /> */}
    </>
  );
};

export default Single;
