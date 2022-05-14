import React, { useState, useEffect } from 'react';
import { useCartProvider } from '../../contexts/cart-context';
import './Checkout.scss';
import '../../shared/utils.scss';


export const Checkout = () => {

  const products = useCartProvider();

  return (
    <div className='shipping__container'>
      Checkout
    </div>
  );
};