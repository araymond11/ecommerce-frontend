import React, { useContext } from 'react';
import { store } from '../../store';
import './Cart.css';

export default function Cart() {

  const globalState = useContext(store);
  console.log(globalState);

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
          <tr>
            <td>
              <img className='cart__img' src="https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_10.jpg.rendition.480.480.jpg" alt="" />
            </td>
            <td>1200$</td>
            <td>1</td>
            <td>1200$</td>
          </tr>
        </tbody>
      </table>
      <div className='payment__container'>
        <div className='subtotal'>Subtotal : 3600$</div>
        <span>
          <button className='checkout__btn'>Check out</button>
        </span>
      </div>
    </div>
  );
}