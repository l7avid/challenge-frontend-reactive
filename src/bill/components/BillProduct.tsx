import * as React from 'react';
import { useSelector} from 'react-redux';
import { saveProduct } from '../../product/actions/ProductActions';
import ProductList from '../../product/components/ProductList';
import { productType } from '../../product/slice/productSlice';
import { stateTypeRedux, storeDispatch } from '../../store/store';



interface IBillProductProps {
    product: productType
}

const BillProduct: React.FunctionComponent<IBillProductProps> = ({product}) => {    

    const updateUnits = (event :React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
        const productPrice = product.productPrice * Number(event.target.value)
        const billProduct = {
          productName: product.productName,
          units: Number(event.target.value),
          price:productPrice
        }

        console.log(billProduct);
        
    }

  return (
    <div>
        <input type="number" defaultValue='0' min='0' onChange={(event) => updateUnits(event)}/>
        <h5>Product: {product.productName}</h5>
        <h5>Stock: {product.availableUnits}</h5>
        <h5>Price: {product.productPrice}</h5>
    </div>

  );
};

export default BillProduct;