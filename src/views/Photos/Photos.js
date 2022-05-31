import React from 'react';

import './Photos.css';

import NavBar from '../../components/NavBar/NavBar';

const Photos = () => {

  return (
    <div className='getinspire-page'>
        {NavBar()}
        <div>
            <h2>Photos From Our Journies</h2>

        </div>
    </div>
  );
}

export default Photos;