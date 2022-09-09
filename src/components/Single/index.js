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
