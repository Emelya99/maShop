import React from 'react';

import SingleProduct from '../SingleProduct';
import SimilarProducts from '../SimilarProducts';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../redux/slices/singleSlice';

const Single = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.single.isLoading);

  React.useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <SingleProduct />
      {isLoading === 'success' && <SimilarProducts />}
    </>
  );
};

export default Single;
