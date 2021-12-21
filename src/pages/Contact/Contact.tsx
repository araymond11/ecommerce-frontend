import React from 'react';
import './Contact.scss';

const Contact = () => {
  return(
    <>
      <div className='contact__container'>
        <img src={process.env.PUBLIC_URL + '/contact.png'} alt="" className='contact__img'/>
        <div className='contact__side-bar'>
          <span className='contact__text--32'>Encountered a problem ?</span>
          <span className='contact__text--24'>Our support team is ready to help</span>
          <span>
            <button className='shop_btn'>Get Started !</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;