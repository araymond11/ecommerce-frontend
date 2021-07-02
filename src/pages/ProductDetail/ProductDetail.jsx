import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import './ProductDetail.css';

export default function ProductDetail(){

  const getProductById = (id) => {
    const product = products.find(x => x.id == id);
    return product;
  };

  const products = data.products;
  const { id } = useParams();
  const product = getProductById(id);


  return(
    <>
      <div className='productDetail__container'>
        <div className='productDetail__container--left'>
          <img src={product.image} alt="" className='productDetail__img'/>
        </div>
        <div className='productDetail__container--right'>
          <h1 className='bottomSpacer__1rem'>
            {product.name}
          </h1>
          <div className='bottomSpacer__1rem'>
            {product.price}$
          </div>
          <div className='productDetail__description bottomSpacer__1rem'>
            {product.description}
          </div>     
          <span>
            <input type="number" name="quantity" defaultValue="1" min="1" className='productDetail__quantity' />
            <button className='shop_btn'>Add to cart</button>
          </span>
        </div>
      </div>
    </>
  );
}