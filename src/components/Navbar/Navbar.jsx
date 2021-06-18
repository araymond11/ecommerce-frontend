import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar_menu'>
          <li className='navbar_item'>
            <Link to='/' className='navbar_item'>
                    HOME
            </Link>
          </li>
          <li className='navbar_item'>
            <Link to='/products' className='navbar_item'>
                    PRODUCTS
            </Link>
          </li>
          <li className='navbar_item'>
            <Link to='/contact' className='navbar_item'>
                    CONTACT
            </Link>
          </li>
          <li className='navbar_item'> 
            <Link to='/about' className='navbar_item'>
                    ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}