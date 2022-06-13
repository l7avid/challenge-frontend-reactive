import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newProductType } from '../../bill/slice/billSlice';
import { getAllPurveyors } from '../../purveyor/actions/PurveyorActions';
import { getAllPurveyorsReducer } from '../../purveyor/slice/purveyorSlice';
import { stateTypeRedux } from '../../store/store';
import { getAllProducts } from '../actions/ProductActions';
import ProductList from '../components/ProductList';
import { getAllProductsReducer } from '../slice/productSlice';


const MyProducts = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  console.log(user);
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

    
  useEffect(() => {
    if(user=== null){
      navigate('/logInGoogle')
    }

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
