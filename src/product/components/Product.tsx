import * as React from 'react';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
      <div>
        <h5 className='h5'>-------------------------------------------------------------------</h5>
        <h5 className='h5'>Name: {product.productName}</h5>
        <h5 className='h5'>Description: {product.productDescription}</h5>
        <h5 className='h5'>Min. Amount: {product.minAmount}</h5>
        <h5 className='h5'>Max. Amount: {product.maxAmount} </h5>
        <h5 className='h5'>Available units: {product.availableUnits} </h5>
        <h5 className='h5'>Price: {product.productPrice}</h5> 
        <h5 >Purveyor Name: {product.purveyorName}</h5> 
      </div>
  )
};

export default Product;
