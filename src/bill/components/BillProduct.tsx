import * as React from 'react';
import { useSelector} from 'react-redux';
import { productType } from '../../product/slice/productSlice';
import { stateTypeRedux, storeDispatch } from '../../store/store';



interface IBillProductProps {
    product: productType
}

const BillProduct: React.FunctionComponent<IBillProductProps> = ({product}) => {

    const dispatch = storeDispatch();

    const productState = useSelector((state: stateTypeRedux) => state.product.products)
    

    const updateUnits = (event :React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
        const productPrice = product.productPrice * Number(event.target.value)
        const billProduct = {productName: product.productName, units: Number(event.target.value), price:productPrice}

        const productToBill = 
        dispatch(productToBill(billProduct))
    }

  return (
    <div>
        <input type="number" defaultValue='0' min='0' onChange={(event) => updateUnits(event)}/>
        {product.productQuantity}
        {product.productPrice}
    </div>

  );
};

export default BillProduct;