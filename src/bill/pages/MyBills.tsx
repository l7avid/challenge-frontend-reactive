import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateTypeRedux } from '../../store/store';
import { getAllBills } from '../actions/BillActions';
import BillList from '../components/BillList';
import { getAllBillsReducer } from '../slice/billSlice';

const MyBills = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)
  
  const navigate = useNavigate();  
  
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if(user === null){
      navigate('/logInGoogle')
    }
    
    getAllBills().then(bills => {
      
      dispatch(getAllBillsReducer(bills))
    })
  }, [])


  return (
    <BillList/>
  )
};

export default MyBills;