import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.scss';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div>
      <nav className='navbar'>
        <img className='navbar__logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
        <div className='navbar__menu--display' onClick={handleClick}>
          <MenuIcon/>
        </div>
        <ul className={click ? 'navbar__menu navbar__menu--active' : 'navbar__menu'}>
          <li className='navbar__item'>
            <Link to='/' className='navbar__links' onClick={closeMobileMenu}>
                    Home
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/products' className='navbar__links' onClick={closeMobileMenu}>
                    Products
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/contact' className='navbar__links' onClick={closeMobileMenu}>
                    Contact Us
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/about' className='navbar__links' onClick={closeMobileMenu}>
                    About
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/cart' className='navbar__links' onClick={closeMobileMenu}>
              <ShoppingCartIcon/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;