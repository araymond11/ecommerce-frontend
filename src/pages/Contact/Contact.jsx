import React from 'react';
import './Contact.css';

export default function Contact() {
  return(
    <>
      <div className='contact_container'>
        <img src={process.env.PUBLIC_URL + '/contact.png'} alt="" className='contact_img_container'/>
        <div className='contact_right_side'>
          <span className='contact_header_text'>Encountered a problem ?</span>
          <span className='contact_text'>Our support team is ready to help</span>
          <span>
            <button className='shop_btn'>Get Started !</button>
          </span>
        </div>
      </div>
    </>
  );
}