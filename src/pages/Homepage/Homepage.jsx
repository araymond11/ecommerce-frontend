import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';

export default function Homepage(){
  return (
    <>
      <section className='cover center' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/cover_media.png'})`}}>
        <div className='cover__quote'>Leading an ergonomically correct life is not expensive anymore</div>
      </section>
      <section className='center'>
        <div className='container__left'>
          <p className='center bottom__spacer'>Need new furnitures ? Check it out !</p>
          <div className='center'>
            <Link to='/products' className='shop__link'>
              <button className='shop__btn'>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className='container__right'>
          <img className='container__right-img' src={process.env.PUBLIC_URL + '/luxury_office.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
      <section>
        <div>
          <img className='bottom__img' src={process.env.PUBLIC_URL + '/bottom_picture.jpg'} loading="lazy" alt=""/>
        </div>
      </section>
    </>
  );
}
