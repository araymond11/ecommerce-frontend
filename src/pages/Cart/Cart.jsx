import React from 'react';
import { useCart } from '../../store';
import ProductDetailTable from '../../components/ProductDetailTable/ProductDetailTable';
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
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x,index) =>{
            return(
              <ProductDetailTable product={x} index={index} key={index}/>
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