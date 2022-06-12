
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../product/actions/ProductActions';
import { getAllProductsReducer } from '../../product/slice/productSlice';
import { getAllPurveyors } from '../../purveyor/actions/PurveyorActions';
import { getAllPurveyorsReducer } from '../../purveyor/slice/purveyorSlice';
import { stateTypeRedux } from '../../store/store';
import Receipt from './Receipt';

const ReceiptList = () => {

    const receipts = useSelector((state: stateTypeRedux) => state.receipt.receipts)

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
    {receipts.map((receipt) => <Receipt key={receipt.receiptId} receipt={receipt} />)}
  </div>
)};

export default ReceiptList;