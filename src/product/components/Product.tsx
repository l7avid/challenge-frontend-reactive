import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions/ProductActions';
import { deleteProductReducer, productType } from '../slice/productSlice';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {

  const dispatch = useDispatch();

const deleteSingleProduct = async (event: React.FormEvent<HTMLButtonElement>) => {

  event.preventDefault();
  const deleteState = await deleteProduct(`${product.productId}`);

  if(deleteState.productDeleted){
    dispatch(deleteProductReducer(deleteState.productId))
  }
  // dispatch(deleteProductReducer(deleteOneProduct))
}

  return (
      <div>
        <h5 style={{marginBottom: "-2vh", marginTop: "-1vh"}}>-------------------------------------------------------------------</h5>
        <h5 className='h5'>Name: {product.productName}</h5>
        <h5 className='h5'>Description: {product.productDescription}</h5>
        <h5 className='h5'>Min. Amount: {product.minAmount}</h5>
        <h5 className='h5'>Max. Amount: {product.maxAmount} </h5>
        <h5 className='h5'>Available units: {product.availableUnits} </h5>
        <h5 className='h5'>Price: {product.productPrice}</h5> 
        <h5 >Purveyor Name: {product.purveyorName}</h5>
        <button onClick={(event) => deleteSingleProduct(event)} style={{marginBottom: "1vh"}}>Delete</button>
      </div>
  )
};

export default Product;
