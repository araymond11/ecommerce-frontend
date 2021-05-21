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
                    Products
            </Link>
          </li>
          <li className='navbar_item'>
                    Contacts
          </li>
          <li className='navbar_item'> 
                    About
          </li>
        </ul>
      </nav>
    </div>
  );
}