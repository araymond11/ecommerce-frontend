import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='upper-section'>
        <div className='footer-items'>
          <h2>About Us</h2>
          <Link to='/'>Terms of Service</Link>
          <Link to='/'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
        </div>
        <div className='footer-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
        </div>
        <div className='footer-items'>
          <h2>Our Products</h2>
          <Link to='/'>Standing desk</Link>
          <Link to='/'>Office chair</Link>
          <Link to='/'>Influencer</Link>
          <Link to='/'>Monitor</Link>
        </div>
        <div className='footer-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='social-media-link'>
          <Link to='/'><FacebookIcon fontSize="large"/></Link>
          <Link to='/'><TwitterIcon fontSize="large"/></Link>
          <Link to='/'><LinkedInIcon fontSize="large"/></Link>
          <Link to='/'><InstagramIcon fontSize="large"/></Link>
          <Link to='/'><PinterestIcon fontSize="large"/></Link>
        </div>
      </div>
      <small className='website-rights'>©Copyright. All rights reserved</small>
    </footer>
  );
}

export default Footer;
