import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../product/actions/ProductActions';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { stateTypeRedux } from '../../store/store';
import { receiptType, getAllReceiptsReducer } from '../slice/receiptSlice';

interface IReceiptProps {
    receipt: receiptType
}

const Receipt: React.FunctionComponent<IReceiptProps> = ({receipt}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAllProducts().then(products => {
      
      dispatch(getAllProductsReducer(products))
    })
  }, [])

  const purveyorState = useSelector((state: stateTypeRedux) => state.purveyor.purveyors)
  
  const productState = useSelector((state: stateTypeRedux) => state.product.products)

  return (
      <div>
        <h5 className='h5'>-------------------------------------------------------------------</h5>
        <h5>Date: {receipt.date}</h5>
        <h5>Purveyor: {purveyorState.map(purveyor => (purveyor.purveyorId === receipt.purveyorId) && purveyor.purveyorName )} </h5>
        <h5>Product: {productState.map(product => (product.purveyorId === receipt.purveyorId) && product.productName)} </h5>
        <h5>Purveyor Id: {purveyorState.map(purveyor => (purveyor.purveyorId === receipt.purveyorId) && purveyor.purveyorId )} </h5>
      </div>
  )
};

export default Receipt;