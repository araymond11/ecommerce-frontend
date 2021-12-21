import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../../contexts/cart-context';
import { Button } from '../../components/Button/Button';
import { Product,ProductParam } from '../../types/interfaces';
import data from '../../data.json';
import './ProductDetail.scss';

const ProductDetail = () => {

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const products = data.products;

  const {id} = useParams<ProductParam>();

  const getProductById = (id:number) => {
    const product = products.find(x => x.id === id);
    return product!;
  };

  const product = getProductById(Number(id));

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = (Number(event.target.value));
    setQuantity(newQuantity);
  };

  const onClick = () => {
    addToCart(product!);
  };

  const addToCart = (product:Product) => {
    product.quantity = parseInt(quantity.toString());
    dispatch({ type: 'add product', product });
  };


  return(
    <>
      <div className='product-detail__container'>
        <div className='product-detail__container--left'>
          <img src={product && product.image} alt="" className='product-detail__img'/>
        </div>
        <div className='product-detail__container--right'>
          <h1 className='bottom-spacer__1rem'>
            {product && product.name}
          </h1>
          <div className='bottom-spacer__1rem'>
            {product && product.price}$
          </div>
          <div className='product-detail__description bottom-spacer__1rem'>
            {product && product.description}
          </div>     
          <span>
            <input type="number" name="quantity" defaultValue="1" min="1" className='product-detail__quantity' onChange={onChange} />
            <Button primary={false} size={'medium'} label={'Add to cart'} onClick={onClick}/>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;