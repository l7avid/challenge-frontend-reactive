import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllBills } from '../actions/BillActions';
import BillList from '../components/BillList';

const MyBills = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
    getAllBills().then(bills => {
      
      dispatch(getAllBillReducer(bills))
    })
  }, [])


  return (
    <BillList/>
  )
};

export default MyBills;