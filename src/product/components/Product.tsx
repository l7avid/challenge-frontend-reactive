import * as React from 'react';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
      <div>
        <h5>-------------------------------------------------------------------</h5>
        <h5>Name: {product.productName}
        Description: {product.productDescription}
        Min. Amount: {product.minAmount}
        Max. Amount: {product.maxAmount}
        Available units: {product.availableUnits}
        Price: {product.productPrice}
        Purveyor Name: {product.purveyorName}</h5>
      </div>
  )
};

export default Product;
