import React, {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from '../../contexts/cart-context';
import { ProductTable } from '../../types/interfaces';
import './ProductDetailTable.scss';

const ProductDetailTable: React.FC<ProductTable> = ({product, index, onClick}) => {

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = (Number(event.target.value));
    setQuantity(newQuantity);
  };

  const removeFromCart = (index:string) => {
    dispatch({ type: 'remove product', index });
  };

  const updateProductQuantity = (number:string) => {
    if(number != ''){
      let id = product.id;
      let prop = {number, id};
      dispatch({ type: 'update product', prop });
    }
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, []);

  return(
    <tr>
      <td className='table__product'>
        <img className='cart__img' src={product.image} alt="" />
        <DeleteIcon className='icon__cursor' onClick={() => removeFromCart(index)}/>
      </td>
      <td data-label='Price'>{product.price}</td>
      <td data-label='Quantity' className='alignCenter'>
        <input type="text" name="quantity" className='productDetail__quantity' value={quantity} onChange={(event)=>{onChange; onClick; updateProductQuantity(event.target.value);}}/>
      </td>
      <td data-label='Total'>{(quantity * product.price).toFixed(2)}</td>
    </tr>
  );
};
export default ProductDetailTable;