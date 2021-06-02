import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        {/* <Link to='/' className='navbar_logo'>
          <img style={{height: '125px'}} src={process.env.PUBLIC_URL + '/logo.png'} loading="lazy" alt=""/>
        </Link> */}
        <ul className='navbar_menu'>
          <li className='navbar_item'>
            <Link to='/products' className='navbar_item'>
                    PRODUCTS
            </Link>
          </li>
          <li className='navbar_item'>
                    CONTACTS
          </li>
          <li className='navbar_item'> 
                    ABOUT
          </li>
        </ul>
      </nav>
    </div>
  );
}