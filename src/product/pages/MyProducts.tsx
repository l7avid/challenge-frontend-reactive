import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../actions/ProductActions';
import ProductList from '../components/ProductList';
import { getAllProductsReducer } from '../slice/productSlice';

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
