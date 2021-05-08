import React from 'react';
import './Homepage.css';
export default function Homepage(){
  return (
    <div>
      <section style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/banner.jpg'})`,
        backgroundRepeat: 'no-repeat',
        height: '92vh',
        backgroundSize: '100% 100%',
        WebkitTransition: 'background-image 5s',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'}}>
        <div className='cover_quote'>The love of gardening is a seed once sown that never dies</div>
      </section>
      <section>
        <div className='row_1_left_side'>
          It is for everyone, come join us! 
        </div>
        <div className='row_1_right_side'>
          <img className='right_side_row_img' src={process.env.PUBLIC_URL + '/kid.jpeg'} loading="lazy" alt="" style={{margin: '25px'}}/>
        </div>
      </section>
      <section>
        <div className='row_2_left_side'>
          <img className='right_side_row_img' src={process.env.PUBLIC_URL + '/plant.jpg'} loading="lazy" alt="" style={{margin: '25px'}}/>
        </div>
        <div className='row_2_right_side'>
          What a lovely plant, you like it ? 
        </div>
      </section>
    </div>
  );
}
