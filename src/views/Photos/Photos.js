import React from 'react';

import './Photos.css';

import NavBar from '../../components/NavBar/NavBar';

const Photos = () => {

  return (
    <div className='getinspire-page'>
        {NavBar()}
        <div>
            <h2>Photos From Our Journies</h2>
            <img src='https://res.cloudinary.com/ditsdxnax/image/upload/v1653642973/dzngfvj7uuc36ttu6b0a.jpg' alt='photo' className='photos-photo'/>
        </div>
    </div>
  );
}

export default Photos;