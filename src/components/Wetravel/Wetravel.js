import React from 'react';
import './wetravel.css';

import DATA from '../../public/assets/DATA';

import images from '../../public/images/images';

const Wetravel = () => { 


    return (
        <div className='wetravel-component'>
          <div className='img-faq'>
            <h2>Where We Are planing to go next?</h2>
            <h4>{DATA.curentLocation.name}</h4>
            <img src={images.map_vector} alt='map' className='we-image'/>
          </div>
        </div>
    )
}

export default Wetravel;