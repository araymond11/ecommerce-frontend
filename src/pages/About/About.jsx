import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';

export default function About() {
  return(
    <>
      <Navbar/>
      <h1 className='product_header'>About Us</h1>
      <div style= {{borderTop: '1px solid gray'}}>
        <div className='about_container'>
          <center>Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.</center>
        </div>
      </div>
    </>
  );
}