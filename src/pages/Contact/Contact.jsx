import React from 'react';
import './Contact.css';

export default function Contact() {
  return(
    <>
      <h1 className='product_header'>Contact</h1>
      <div className='contact_container'>
        <img src={process.env.PUBLIC_URL + '/contact.png'} alt="" className='contact_img_container'/>
        <div className='contact_right_side'>
          <span style= {{fontSize:'2rem'}}>Encountered a problem ?</span>
          <span style= {{fontSize:'1.5rem'}}>Our support team is ready to help</span>
          <span>
            <button className='shop_btn'>Get Started !</button>
          </span>
        </div>
      </div>
    </>
  );
}