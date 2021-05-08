import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'


export default function Navbar() {
return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='navbar_logo'>
                LOGO
            </Link>
            <ul className='navbar_menu'>
                <li className='navbar_item'>
                <Link to='/products' className='navbar_logo'>
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
    
)
}