import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateTypeRedux } from '../../store/store';
import { getAllProducts } from '../actions/ProductActions';
import { getAllProductsReducer } from '../slice/productSlice';
import Product from './Product';


const ProductList = () => {

    const products = useSelector((state: stateTypeRedux) => state.product.products)

  return (
  <div>
    {products.map((product) => <Product key={product.productId} product={product} />)}
  </div>
)};

export default ProductList;
