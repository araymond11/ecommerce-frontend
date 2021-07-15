import React, {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from '../../store';

export default function ProductDetailTable(props){

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const removeFromCart = (index) => {
    dispatch({ type: 'remove product', index });
  };

  useEffect(() => {
    setQuantity(props.product.quantity);
  }, []);

  return(
    <tr>
      <td className='table__product'>
        <img className='cart__img' src={props.product.image} alt="" />
        <DeleteIcon className='icon__cursor' onClick={() => removeFromCart(props.index)}/>
      </td>
      <td data-label='Price'>{props.product.price}</td>
      <td data-label='Quantity' className='alignCenter'>
        <input type="text" name="quantity" className='productDetail__quantity' value={quantity} onChange={e=>setQuantity(e.target.value)}/>
      </td>
      <td data-label='Total'>{quantity * props.product.price}</td>
    </tr>
  );
}