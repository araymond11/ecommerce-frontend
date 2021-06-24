import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage(){
  return (
    <>
      <section className='cover center' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/cover_media.png'})`}}>
        <div className='cover_quote'>Leading an ergonomically correct life is not expensive anymore</div>
      </section>
      <section className='center'>
        <div className='row_1_left_side'>
          <p className='center bottom_spacer'>Need new furnitures ? Check it out !</p>
          <div className='center'>
            <Link to='/products' className='shop_link'>
              <button className='shop_btn'>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className='row_1_right_side'>
          <img className='right_side_row_img' src={process.env.PUBLIC_URL + '/luxury_office.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
      <section>
        <div>
          <img className='bottom_img' src={process.env.PUBLIC_URL + '/bottom_picture.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
    </>
  );
}
