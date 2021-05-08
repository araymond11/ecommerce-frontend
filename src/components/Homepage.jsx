import React from 'react';
export default function Homepage(){
    return (
        <>
        <section style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/gardening.jpeg'})`,
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        backgroundSize: 'cover',
        WebkitTransition: 'background-image 5s'}}>
        </section>
        <section>
            <div className='left_side_row'>
                It is for everyone, come join us! 
            </div>
            <div className='right_side_row'>
                <img className='right_side_row_img' src={process.env.PUBLIC_URL + '/kid.jpeg'} loading="lazy" alt="" style={{margin: '25px'}}/>
            </div>
        </section>
        </>
    )
}
