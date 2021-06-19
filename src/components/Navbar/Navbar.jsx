import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';


export default function Navbar() {
  return (
    <div style={{display: 'flex', borderBottom:'1px solid gray'}}>
      <img className='navbar_logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
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
      <div className='burger'>
        <Link style={{fontSize:'xxx-large', color:'black'}} to='/'><MenuIcon fontSize="inherit"/></Link>
      </div>
    </div>
  );
}