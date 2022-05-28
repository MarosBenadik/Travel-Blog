import React from 'react';

import './Guide.css';

import NavBar from '../../components/NavBar/NavBar';

const Guide = () => {


  return (
    <div className='OurJourny-page'>
        {NavBar()}
        <div>
            <p>Guide</p>
        </div>
    </div>
  );
}

export default Guide;