import React from 'react';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Homepage.scss';

export default function Homepage(){

  return (
    <>
      <section>
        <div className='top-page'>
          <div className='display__center'>
            <div className='top-page-left'>
              <p className='top-page-left__paragraphe font__principal'>Be the place where people will work not because they have to, but because they want to.</p>
              <Link to='/products'>
                <Button primary={true} size={'medium'} label={'Buy now'}/>
              </Link>
            </div>
          </div>
          <div className='display__center'>
            <img className='top-page__img' src={process.env.PUBLIC_URL + 'office_img.png'} loading="lazy" alt=""/>
          </div>
        </div>
      </section>
      <section className='wave display__center column-reverse'>
        <img className='wave__img' src={process.env.PUBLIC_URL + 'wave.svg'} loading="lazy" alt=""/>
        <div className='mid-page'>
          <div>
            <p className='mid-page__header display__center font__principal'>Everybody is different</p>
            <div className='display__center'>
              <p className='mid-page__paragraphe font__principal'>By recognizing that individuals and organizations have their own unique purpose, character, and activities, Living Office transforms the workplace into a powerful instrument that expresses an organization’s unique culture and progresses its unique ambitions.</p>
            </div>
          </div>
          <div className='display__center'>
            <img className='mid-page__img-size' src={process.env.PUBLIC_URL + 'office_mobile.png'} loading="lazy" alt=""/>
          </div>
        </div>
      </section>
      <section>
        <div>
        </div>
      </section>
    </>
  );
}
