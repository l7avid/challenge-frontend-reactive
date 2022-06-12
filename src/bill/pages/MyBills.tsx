import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllBills } from '../actions/BillActions';
import BillList from '../components/BillList';
import { getAllBillsReducer } from '../slice/billSlice';

const MyBills = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
    getAllBills().then(bills => {
      
      dispatch(getAllBillsReducer(bills))
    })
  }, [])


  return (
    <BillList/>
  )
};

export default MyBills;