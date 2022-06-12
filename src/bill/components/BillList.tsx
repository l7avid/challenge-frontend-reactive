import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../product/actions/ProductActions';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { getAllPurveyors } from '../../purveyor/actions/PurveyorActions';
import { getAllPurveyorsReducer } from '../../purveyor/slice/purveyorSlice';
import { stateTypeRedux } from '../../store/store';
import Bill from './Bill';

const BillList = () => {

    const bills = useSelector((state: stateTypeRedux) => state.bill.bills)

    const dispatch = useDispatch()
    
    useEffect(() => {
      getAllProducts().then(products => {
  
        dispatch(getAllProductsReducer(products))
      })
      getAllPurveyors().then(purveyors => {
        dispatch(getAllPurveyorsReducer(purveyors))
      })
    }, [])

  return (
  <div>
    {bills.map((bill) => <Bill key={bill.billId} bill={bill} />)}
  </div>
)};

export default BillList;