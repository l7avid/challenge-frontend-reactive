import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateTypeRedux } from '../../store/store';
import { saveBill } from '../actions/BillActions';
import BillProduct from '../components/BillProduct';
import { addBillReducer, newProductType } from '../slice/billSlice';

const NewBill = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  console.log(user);
  
  const navigate = useNavigate();

  useEffect(()=> {
    if(user === null){
      navigate('/logIn')
    }
  }, [])


  const dispatch = useDispatch();
  const productState = useSelector((state: stateTypeRedux) => state.product.products)
  const billState = useSelector((state: stateTypeRedux) => state.bill.bills)

  const [clientName, setClientName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [billProductsList, setBillProductList] = useState<newProductType[]>([]) 

  const createBill = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const billProducts = billState.flatMap(billProduct => billProduct.productsId);

    // const billProductsObject = Object.fromEntries(billProducts)

    const totalToPay = billState.reduce((add, bill) => bill.totalToPay + add, 0)

    console.log(totalToPay);
    

    if (clientName && sellerName && billProducts && totalToPay) {
      console.log("Enviando")
      const newBill = {
        date: (new Date).toString(),
        clientName,
        sellerName,
        totalToPay,
        productsId: billProducts
      };

      const bill = await saveBill(newBill);

      dispatch(addBillReducer(bill));

      setClientName('')
      setSellerName('')
    }
  };

  

  return (
    <div>
      <form>
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Client Name"
          onChange={(event) => setClientName(event.target.value)}
          value={clientName}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Seller Name"
          onChange={(event) => setSellerName(event.target.value)}
          value={sellerName}
        />
        <h5>{productState.map(product => <BillProduct addBillProductToList={setBillProductList} product={product} key={product.productId}/>)}</h5>
        </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => createBill(event)}>Generate</button>
    </div>
  )
};

export default NewBill;
