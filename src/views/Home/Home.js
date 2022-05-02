import React from 'react';
import './Home.css';

const Home = () => {
  function renderTabs() {
    return (
      <div className='top-component' >
        <p>sd</p>
      </div>
    )
  }

  function renederHeaders(){

    const header_img = require('../../bucket/images/small-img2.webp');

    const google_img = require('../../bucket/images/google_play_store.webp');

    return (
      <div className='top-part'>
        <div className='left-part'>
          <div className='left-text-container'>
            <p className='left-text' >World's first social beauty app</p>
            <h1 className='text-bold' >Find beauty salons,</h1><span><p className='text-bold' >barbers, henna artists  </p></span>
            <p className='text-bold' >and spas near you</p>
          </div>
          <div className='download' >
            <p className='left-text-download' >Download ChicChic Today!</p>
          </div>
          <div className='google-container' >
            <a href="https://play.google.com/store/apps/details?id=com.chicchic.app" className="playstorebtn" title="google play store"><img src={google_img} className='google-image' alt='google store'/></a>
          </div>
        </div>
        <div className='right-part'>
          <img src={header_img} className="right-image" alt='artist'/>
        </div>
        <div class="custom-shape-divider-bottom-1645114717">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
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