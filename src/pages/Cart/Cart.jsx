import React from 'react';
import './Cart.css';

export default function Cart() {
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
            <td>Image</td>
            <td>1200$</td>
            <td>1</td>
            <td>1200$</td>
          </tr>
          <tr>
            <td>Another Image</td>
            <td>1200$</td>
            <td>2</td>
            <td>2400$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}