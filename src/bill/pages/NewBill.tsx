import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateTypeRedux } from '../../store/store';

const NewBill = () => {

  const dispatch = useDispatch();
  const productState = useSelector((state: stateTypeRedux) => state.product.products)
  const billState = useSelector((state: stateTypeRedux) => state.bill.bills)

  const [clientName, setClientName] = useState('');
  const [sellerName, setSellerName] = useState('');

  const createReceipt = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const billProducts = new Map(billState.map(billProduct => {
        return [billProduct.productName, billProduct.productUnits]
    }));

    const billProductsObject = Object.fromEntries(billProducts)

    const totalToPay = billState.reduce((add, product) => product.productPrice + add, 0)

    if (clientName && sellerName && billProductsObject && totalToPay) {
      console.log("Enviando")
      const newBill = {
        date: (new Date).toString(),
        clientName,
        sellerName,
        totalToPay,
        billProductsObject
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
        <h5>{productState.map(product => <ProductItemBill product={product} key={product.productId}/>)}</h5>
        </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => createReceipt(event)}>Generate</button>
    </div>
  )
};

export default NewBill;
