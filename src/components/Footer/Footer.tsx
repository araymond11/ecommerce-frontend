import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='upper_section'>
        <div className='footer__items'>
          <h2>About Us</h2>
          <Link to='/'>Terms of Service</Link>
          <Link to='/'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
        </div>
        <div className='footer__items'>
          <h2>Contact Us</h2>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
        </div>
        <div className='footer__items'>
          <h2>Our Products</h2>
          <Link to='/'>Standing desk</Link>
          <Link to='/'>Office chair</Link>
          <Link to='/'>Influencer</Link>
          <Link to='/'>Monitor</Link>
        </div>
        <div className='footer__items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
      <div className='bottom_section'>
        <div className='socia-media__link'>
          <Link to='/'><FacebookIcon fontSize="large"/></Link>
          <Link to='/'><TwitterIcon fontSize="large"/></Link>
          <Link to='/'><LinkedInIcon fontSize="large"/></Link>
          <Link to='/'><InstagramIcon fontSize="large"/></Link>
          <Link to='/'><PinterestIcon fontSize="large"/></Link>
        </div>
      </div>
      <div className='website__rights'>
        <small className='website__rights--white'>©Copyright. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
