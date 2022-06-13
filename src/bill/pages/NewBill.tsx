import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateTypeRedux } from '../../store/store';
import { saveBill } from '../actions/BillActions';
import BillProduct from '../components/BillProduct';
import { addBillReducer, newProductType } from '../slice/billSlice';

const NewBill = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  // console.log(user);
  
  const navigate = useNavigate();

  useEffect(()=> {
    if(user === null){
      navigate('/logIn')
    }
  }, [])


  const dispatch = useDispatch();
  const productState = useSelector((state: stateTypeRedux) => state.product.products)
  const billState = useSelector((state: stateTypeRedux) => state.bill.bills)

  const [client, setClientName] = useState('');
  const [seller, setSellerName] = useState('');
  const [billProductsList, setBillProductList] = useState<newProductType[]>([])

  const productIdState = productState.map(product => product.productId);
  const productsId = billProductsList.map(billProductsList => billProductsList.productId);  

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const productsUpdated = []
    console.log("inside onSubmit");
    for (var i = 0; i < productIdState.length; i++) {
      for (var j = 0; j < productsId.length; j++) {
        if (productIdState[i] === productsId[j]) {
          productsUpdated.push(productIdState[i])
          console.log(productsUpdated);
        }
      }
    }
  }

  const createBill = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    console.log("list#1 ",billProductsList);
    console.log("list#2", productState);

    const totalToPay = billState.reduce((add, bill) => bill.totalPaid + add, 0)
    
    if (client && seller) {
      console.log("Enviando")
      const newBill = {
        date: (new Date).toString(),
        client,
        seller,
        totalPaid: 10,
        productsId: productsId
      };

      console.log(newBill);
      

      const bill = await saveBill(newBill);

      dispatch(addBillReducer(bill));

      setClientName('')
      setSellerName('')
    }
  };  

  return (
    <div>
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Client Name"
          onChange={(event) => setClientName(event.target.value)}
          value={client}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Seller Name"
          onChange={(event) => setSellerName(event.target.value)}
          value={seller}
        />
        <h5>{productState.map(product => <BillProduct addBillProductToList={setBillProductList} product={product} key={product.productId}/>)}</h5>
        <button style={{display: "none"}} type="submit"></button>
        </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => createBill(event)}>Generate</button>
    </div>
  )
};


export default NewBill;
