import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateTypeRedux } from '../../store/store';
import { saveProduct } from '../actions/ProductActions';
import { addProductReducer } from '../slice/productSlice';

const NewProduct = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  console.log(user);
  
  const navigate = useNavigate();

  useEffect(()=> {
    if(user=== null){
      navigate('/logIn')
    }
  }, [])

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [minAmount, setMinAmount] = useState<number>();
  const [maxAmount, setMaxAmount] = useState<number>();
  const [availableUnits, setAvailable] = useState<number>(0);
  const [productPrice, setProductPrice] = useState<number>();
  const [purveyorId, setPurveyorId] = useState('');

  const addProduct = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (productName && productDescription && minAmount && maxAmount && productPrice && purveyorId) {
      console.log("Enviando")
      const productToAdd = {
        productName,
        productDescription,
        minAmount,
        maxAmount,
        availableUnits,
        productPrice,
        purveyorId
      };

      const product = await saveProduct(productToAdd);

      dispatch(addProductReducer(product));

      setProductName('');
      setProductDescription('');
      setMinAmount(0);
      setMaxAmount(0);
      setAvailable(0);
      setProductPrice(0);
      setPurveyorId('')

    }
  };

  return (
    <div>
      <form>
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Product"
          onChange={(event) => setProductName(event.target.value)}
          value={productName}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Description"
          onChange={(event) => setProductDescription(event.target.value)}
          value={productDescription}
        />
        <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="number"
          placeholder="Min"
          onChange={(event) => setMinAmount(event.target.valueAsNumber)}
          value={minAmount}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="number"
          placeholder="Max"
          onChange={(event) => setMaxAmount(event.target.valueAsNumber)}
          value={maxAmount}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="number"
          placeholder="Price"
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
          value={productPrice}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Purveyor"
          onChange={(event) => setPurveyorId(event.target.value)}
          value={purveyorId}
        />
      </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => addProduct(event)}>Add Product</button>
    </div>
  )
};

export default NewProduct;
