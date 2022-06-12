import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllPurveyors } from '../../purveyor/actions/PurveyorActions';
import { getAllPurveyorsReducer } from '../../purveyor/slice/purveyorSlice';
import { getAllProducts } from '../actions/ProductActions';
import ProductList from '../components/ProductList';
import { getAllProductsReducer } from '../slice/productSlice';

const MyProducts = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
    getAllProducts().then(products => {

      dispatch(getAllProductsReducer(products))
    })
    getAllPurveyors().then(purveyors => {
      dispatch(getAllPurveyorsReducer(purveyors))
    })
  }, [])


  return (
    <ProductList/>
  )
};

export default MyProducts;
