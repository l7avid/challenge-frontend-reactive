import * as React from 'react';

interface IPurveyorProps {
    product: productType
}

const Purveyor: React.FunctionComponent<IPurveyorProps> = ({product}) => {
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

export default Purveyor;
