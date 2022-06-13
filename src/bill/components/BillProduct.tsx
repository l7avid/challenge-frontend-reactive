import * as React from 'react';
import { useSelector} from 'react-redux';
import { saveProduct } from '../../product/actions/ProductActions';
import ProductList from '../../product/components/ProductList';
import { productType } from '../../product/slice/productSlice';
import { stateTypeRedux, storeDispatch } from '../../store/store';
import { newProductType } from '../slice/billSlice';



interface IBillProductProps {
    product: productType
    addBillProductToList: React.Dispatch<React.SetStateAction<newProductType[]>> 
}

const BillProduct: React.FunctionComponent<IBillProductProps> = ({product, addBillProductToList}) => {

    const updateUnits = (event :React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()

        const productPrice = product.productPrice * Number(event.target.value)
          const billProduct: newProductType = {
          productId: `${product.productId}`,
          units: Number(event.target.value),
          price:productPrice
        }

        addBillProductToList((prev) => {
          const found = prev.find(product => product.productId === billProduct.productId)
          if(found){
         
            // const productToUpdate: productType = {
            //   ...found,
            //   availableUnits: found.units + billProduct.units
            // }
            
            return prev.map(product => product.productId === billProduct.productId? billProduct:product)

          }
          
          return [...prev, billProduct]
        })

        // console.log(billProduct);
        
    }

  return (
    <div>
        <input type="number" defaultValue='0' min='0' placeholder='Units' onChange={(event) => updateUnits(event)}/>
        <h5>Product: {product.productName}</h5>
        <h5>Stock: {product.availableUnits}</h5>
        <h5>Price: {product.productPrice}</h5>
    </div>

  );
};

export default BillProduct;