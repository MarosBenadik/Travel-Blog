import React from 'react';
import './Home.css';

const Home = () => {

  function renederHeaders(){

    const header_img = require('../../bucket/images/small-img2.webp')

    return (
      <div className='top-part'>
        <div className='left-part'>
          <p>left</p>
        </div>
        <div className='right-part'>
          <img src={header_img} alt='right' className='right-image' />
        </div>
      </div>
    )
  }

  return (
    <div className='home' >
      {renederHeaders()}
    </div>
  );
}

export default Home;