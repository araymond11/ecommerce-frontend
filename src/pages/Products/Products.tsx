import React, {useState} from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from '../../types/interfaces';
import './Products.scss';


const Products:React.FC<{products: Product[]}> = (props) => {
  const [filter, setFilter] = useState('All');
  const [expand, setExpand] = useState(false);
  const productFilteredByCategory = props.products.filter((product:Product) => filter === 'All' || product.category === filter);

  const onChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setFilter(button.name);
    expandFilter();
  };

  const expandFilter = () => {
    setExpand(!expand);
  };


  return(
    <>
      <div className='card__container'>
        <span className='filter__row'>   
          <div className='filter__container'>
            <button className='filter__button' onClick={expandFilter}>
              Sort by: <span>{filter}</span>
            </button>
            <div className={`filter__options ${expand ? 'expended' : 'hidden'}`}>
              <button className='product__button' onClick={onChange} name="All">All</button>
              <button className='product__button' onClick={onChange} name="Chair">Chair</button>
              <button className='product__button' onClick={onChange} name="Lamp">Lamp</button>
            </div>
          </div>    
        </span>
        {productFilteredByCategory
          .map((x, i)=> {
            return(
              <div className='card__item' key={i}>
                <Link to={{pathname: `/productDetail/${x.id}`}} className="card__text--textDecoration card__text--black">
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