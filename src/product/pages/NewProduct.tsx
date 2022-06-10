import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const NewProduct = () => {

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [availableUnits, setAvailable] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [purveyorName, setPurveyorName] = useState('');

  const addProduct = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (productName && productDescription && minAmount && maxAmount && availableUnits && productPrice && purveyorName) {
      console.log("Enviando")
      const productToAdd = {
        productName,
        productDescription,
        minAmount,
        maxAmount,
        availableUnits,
        productPrice,
        purveyorName
      };

      const product = await saveProduct(productToAdd);

      dispatch(addProductReducer(product));

      setProductName('');
      setProductDescription('');
      setMinAmount('');
      setMaxAmount('');
      setAvailable('');
      setProductPrice('');

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
          type="text"
          placeholder="Min"
          onChange={(event) => setMinAmount(event.target.value)}
          value={minAmount}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Max"
          onChange={(event) => setMaxAmount(event.target.value)}
          value={maxAmount}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Price"
          onChange={(event) => setProductPrice(event.target.value)}
          value={productPrice}
        />
         <input
          style={{marginTop: "1vh", marginRight: "1vh"}}
          type="text"
          placeholder="Purveyor"
          onChange={(event) => setPurveyorName(event.target.value)}
          value={purveyorName}
        />
      </form>
      <button style={{marginTop: "1vh", marginBottom: "1vh"}} onClick={(event) => addProduct(event)}>Add Product</button>
    </div>
  )
};

export default NewProduct;
