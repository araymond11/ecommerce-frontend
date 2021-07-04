import React from 'react';
import { useCart } from '../../store';
import { useDispatch } from '../../store';
import './Cart.css';

export default function Cart() {

  const products = useCart();
  const totalPrice = products.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();

  const removeFromCart = (index) => {
    dispatch({ type: 'remove product', index });
  };

  return(
    <div className='page__width'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x,index) =>{
            return(
              <tr key={x.id}>
                <td className='table__product'>
                  <img className='cart__img' src={x.image} alt="" />
                  <button className='table__removeBtn' onClick={() => removeFromCart(index)}>Remove</button>
                </td>
                <td>{x.price}</td>
                <td>1</td>
                <td>{x.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='payment__container'>
        <p className='subtotal'>Subtotal : {totalPrice.toLocaleString('en', {style: 'currency',currency: 'CAD'})}</p>
        <span>
          <button className='checkout__btn'>Check out</button>
        </span>
      </div>
    </div>
  );
}