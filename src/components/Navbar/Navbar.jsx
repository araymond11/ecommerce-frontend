import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';


export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className='navbar_container'>
      <nav className='navbar'>
        <img className='navbar_logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
        <div className='menu_icon' onClick={handleClick}>
          <MenuIcon/>
        </div>
        <ul className={click ? 'nav_menu active' : 'nav_menu'}>
          <li className='nav_item'>
            <Link to='/' className='nav_links' onClick={closeMobileMenu}>
                    Home
            </Link>
          </li>
          <li className='nav_item'>
            <Link to='/products' className='nav_links' onClick={closeMobileMenu}>
                    Products
            </Link>
          </li>
          <li className='nav_item'>
            <Link to='/contact' className='nav_links' onClick={closeMobileMenu}>
                    Contact Us
            </Link>
          </li>
          <li className='nav_item'>
            <Link to='/about' className='nav_links' onClick={closeMobileMenu}>
                    About
            </Link>
          </li>
          <li className='nav_item'>
            <Link to='/cart' className='nav_links' onClick={closeMobileMenu}>
              <ShoppingCartIcon/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}