import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import { useDispatch } from '../../store';
import './ProductDetail.css';

export default function ProductDetail(){

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const getProductById = (id) => {
    const product = products.find(x => x.id == id);
    return product;
  };

  const products = data.products;
  const { id } = useParams();
  const product = getProductById(id);

  const addToCart = (product) => {
    product.quantity = quantity;
    dispatch({ type: 'add product', product });
  };


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
            <input type="number" name="quantity" defaultValue="1" min="1" className='productDetail__quantity' onChange={e=>setQuantity(e.target.value)} />
            <button className='shop_btn' onClick={() => addToCart(product)}>Add to cart</button>
          </span>
        </div>
      </div>
    </>
  );
}