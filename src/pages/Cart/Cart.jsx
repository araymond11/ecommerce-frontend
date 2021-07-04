import React from 'react';
import { useCart } from '../../store';
import './Cart.css';

export default function Cart() {

  const products = useCart();
  const totalPrice = products.reduce((total, item) => total + item.price, 0);

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
          {products.map(x =>{
            return(
              <tr key={x.id}>
                <td>
                  <img className='cart__img' src={x.image} alt="" />
                </td>
                <td>{x.price}</td>
                <td>1</td>
                <td>1200$</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='payment__container'>
        <div className='subtotal'>Subtotal : {totalPrice.toLocaleString('en', {style: 'currency',currency: 'CAD'})}</div>
        <span>
          <button className='checkout__btn'>Check out</button>
        </span>
      </div>
    </div>
  );
}