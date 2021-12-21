import React, {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from '../../contexts/cart-context';
import { ProductTable } from '../../types/interfaces';
import './ProductDetailTable.scss';

const ProductDetailTable: React.FC<ProductTable> = ({product, index}) => {

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = (Number(event.target.value));
    setQuantity(newQuantity);
    updateProductQuantity(newQuantity);
  };

  const removeFromCart = (index:string) => {
    dispatch({ type: 'remove product', index });
  };

  const updateProductQuantity = (number:number) => {
    if(number.toString() !== ''){
      let id = product.id;
      let prop = {number, id};
      dispatch({ type: 'update product', prop });
    }
  };

  useEffect(() => {
    setQuantity(product.quantity!);
  }, [product]);

  return(
    <tr>
      <td className='table__product'>
        <img className='cart__img' src={product.image} alt="" />
        <DeleteIcon className='icon__cursor' onClick={() => removeFromCart(index)}/>
      </td>
      <td data-label='Price'>{product.price}</td>
      <td data-label='Quantity' className='alignCenter'>
        <input type="text" name="quantity" className='product-detail__quantity' value={quantity} onChange={onChange}/>
      </td>
      <td data-label='Total'>{(quantity * product.price).toFixed(2)}</td>
    </tr>
  );
};
export default ProductDetailTable;