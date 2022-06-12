import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../product/actions/ProductActions';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { stateTypeRedux } from '../../store/store';
import { billType } from '../slice/billSlice';

interface IBillProps {
    bill: billType
}

const Bill: React.FunctionComponent<IBillProps> = ({bill}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAllProducts().then(products => {
      
      dispatch(getAllProductsReducer(products))
    })
  }, [])

  const purveyorState = useSelector((state: stateTypeRedux) => state.purveyor.purveyors)
  
  const productState = useSelector((state: stateTypeRedux) => state.product.products)

  const productIds = [] as string[]
  productState.map(product => productIds.push(product.productId));

  return (
      <div>
        <h5 className='h5'>-------------------------------------------------------------------</h5>
        <h5>Id: {bill.billId}</h5>
        <h5>Date: {bill.date}</h5>
        <h5>Client: {bill.clientName}</h5>
        <h5>Seller: {bill.sellerName}</h5>
        <h5>Products: {productIds.filter(productId => {
          bill.productsId.includes(productId)
        })}</h5>
      </div>
  )
};

export default Bill;