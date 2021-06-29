import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import './ProductDetail.css';

export default function ProductDetail(){

  //   const [product, setProduct] = useState([]);
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
          <h1>
            {product.name}
          </h1>
          <div>
            {product.description}
          </div>
          <div>
            {product.price}
          </div>
        </div>
      </div>
    </>
  );
}