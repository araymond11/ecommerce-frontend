import React, {useState, useEffect} from 'react';
import { useCartProvider } from '../../contexts/cart-context';
import ProductDetailTable from '../../components/ProductDetailTable/ProductDetailTable';
import { Product } from '../../types/interfaces';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import './Cart.scss';

const Cart = () => {
  const products = useCartProvider();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotalPrice();
  }, [total]);

  const updateTotalPrice = () => {
    let element = document.querySelectorAll('td[data-label="Total"]');
    let totalPrice = 0.00;
    element.forEach(element => {
      totalPrice += parseFloat(element.innerHTML);
    });
    setTotal(totalPrice);
  };


  return(
    <div className='cart__container'>
      {products.length === 0 ? 
        <p className='cart__empty'>The cart is empty</p> :  
        <div className='cart'>
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
              {products.map((x: Product, index:string) =>{
                return(
                  <ProductDetailTable product={x} index={index} key={index}/>
                );
              })}
            </tbody>
          </table>
          <div className='recap-area'>
            <span className='subtotal-container'>
              <p>Subtotal</p>
              <p>{total.toLocaleString('en', {style: 'currency',currency: 'CAD'})}</p>
            </span>
            <div className='button-container'>
              <Link to='/checkout'>
                <Button primary={false} size={'medium'} label={'Check out'}/>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;