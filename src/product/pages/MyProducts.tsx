import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';

interface IMyProductsProps {
}

const MyProducts = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
    getAllProducts().then(products => {

      dispatch(getAllProductsReducer(products))
    })
  }, [])


  return (
    <ProductList/>
  )
};

export default MyProducts;
