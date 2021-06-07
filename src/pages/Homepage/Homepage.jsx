import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage(){
  return (
    <>
      <nav className='homepage_navbar'>
        <ul className='homepage_navbar_menu'>
          <li className='homepage_navbar_item'>
            <Link to='/products' className='homepage_navbar_item'>
                    PRODUCTS
            </Link>
          </li>
          <li className='homepage_navbar_item'>
                    CONTACTS
          </li>
          <li className='homepage_navbar_item'> 
                    ABOUT
          </li>
        </ul>
      </nav>
      <section className='cover center' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/cover.jpg'})`}}>
        <div className='cover_quote'>Leading an ergonomically correct life is not expensive anymore</div>
      </section>
      <section className='center'>
        <div className='row_1_left_side'>
          <p className='center' style={{marginBottom:'10px'}}>Need new furnitures ? Check it out !</p>
          <div className='center'>
            <button className='shop_btn'><Link to='/products' style= {{textDecoration:'none', color:'white'}}>Shop Now</Link></button> 
          </div>
        </div>
        <div className='row_1_right_side'>
          <img className='right_side_row_img' src={process.env.PUBLIC_URL + '/luxury_office.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
      <section>
        <div>
          <img className='bottom_img' src={process.env.PUBLIC_URL + '/bottom_picture.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
    </>
  );
}
