import * as React from 'react';
import { useSelector } from 'react-redux';
import { stateTypeRedux } from '../../store/store';
import Product from './Product';


const PurveyorList = () => {

    const purveyors = useSelector((state: stateTypeRedux) => state.purveyor.purveyors)
    

  return (
  <div>
    {purveyors.map((product) => <Product key={product.productId} product={product} />)}
  </div>
)};

export default PurveyorList;
