import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateTypeRedux } from '../../store/store';
import { saveReceipt } from '../actions/receiptActions';
import { addReceiptReducer } from '../slice/receiptSlice';

const NewReceipt = () => {

  const dispatch = useDispatch();
  const productState = useSelector((state: stateTypeRedux) => state.product.products)

  const [productId, setProductId] = useState('');
  const [productUnits, setProductUnits] = useState<number>();

  const createReceipt = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (productId && productUnits) {
      console.log("Enviando")
      const product = productState.filter(product => product.productId === productId)[0];
      const newReceipt = {
        purveyorId: product.purveyorId,
        productUnits: productUnits,
        date: (new Date).toString(),
        productId: productId
      };

      const receipt = await saveReceipt(newReceipt);

      dispatch(addReceiptReducer(receipt));

      setProductId('')
      setProductUnits(0)


    }
  };

  return (
    <div>
      <form>
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="number"
          min='0'
          placeholder="Units"
          onChange={(event) => setProductUnits(event.target.valueAsNumber)}
          value={productUnits}
        />
        <select name="" id="" onChange={e=>setProductId(e.target.value)}>
          {<option disabled selected>Choose Product</option>}
          {productState.map((product) => <option key={product.productId} value={product.productId}>
          {product.productName}
          </option>)}
        </select>
        </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => createReceipt(event)}>Generate</button>
    </div>
  )
};

export default NewReceipt;
