import React, {useState} from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './Products.scss';


function Products(props) {
  const [filter, setFilter] = useState('All');
  const { products } = props;
  const productFilteredByCategory = products.filter(products => filter === 'All' || products.category === filter);

  const filterProduct = async (e) => {
    setFilter(await e);
  };


  return(
    <>
      <div className='card__container'>
        <span className='filter__row'>   
          <div className='filter__container'>
            <strong>Filter:</strong>
            <select onChange={(event) => filterProduct(event.target.value)}>
              <option value="All">All</option>
              <option value="Chair">Chair</option>
              <option value="Lamp">Lamp</option>
            </select>
          </div>    
        </span>
        {productFilteredByCategory
          .map((x, i)=> {
            return(
              <div className='card__item' key={i}>
                <ProductCard id={x.id} image={x.image} name={x.name} description={x.description} price={x.price}/>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;