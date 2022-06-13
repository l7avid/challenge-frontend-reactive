import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { stateTypeRedux } from '../../store/store';
import { getAllReceipts } from '../actions/receiptActions';
import ReceiptList from '../components/ReceiptList';
import { getAllReceiptsReducer } from '../slice/receiptSlice';

const MyReceipts = () => {

    const dispatch = useDispatch();

    const {user} = useSelector((state:stateTypeRedux) => state.logged)
    
    const navigate = useNavigate();
    
    useEffect(() => {
      if(user=== null){
        navigate('/logInGoogle')
      }
    getAllReceipts().then(receipts => {
      
      dispatch(getAllReceiptsReducer(receipts))
    })
  }, [])


  return (
    <ReceiptList/>
  )
};

export default MyReceipts;