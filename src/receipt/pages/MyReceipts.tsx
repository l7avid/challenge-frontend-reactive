import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { getAllReceipts } from '../actions/receiptActions';
import ReceiptList from '../components/ReceiptList';
import { getAllReceiptsReducer } from '../slice/receiptSlice';

const MyReceipts = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
    getAllReceipts().then(receipts => {
      
      dispatch(getAllReceiptsReducer(receipts))
    })
  }, [])


  return (
    <ReceiptList/>
  )
};

export default MyReceipts;