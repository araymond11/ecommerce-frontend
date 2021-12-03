import React, {useState} from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from '../../types/interfaces';
import './Products.scss';


const Products:React.FC<{products: Product[]}> = (props) => {
  const [filter, setFilter] = useState('All');
  const productFilteredByCategory = props.products.filter((product:Product) => filter === 'All' || product.category === filter);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let newFilter = (event.target.value).toString();
    setFilter(newFilter);
  };


  return(
    <>
      <div className='card__container'>
        <span className='filter__row'>   
          <div className='filter__container'>
            <strong>Filter:</strong>
            <select onChange={onChange}>
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
                <Link to={{pathname: `/productDetail/${x.id}`}} className='card__text--textDecoration card__text--black'>
                  <ProductCard id={x.id} image={x.image} name={x.name} description={x.description} price={x.price}/>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;