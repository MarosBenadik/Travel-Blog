import React from 'react';
import './Forbusiness.css';

import NavBar from '../../components/NavBar/NavBar';

const Forbusiness = () => {
  return (
    <div className='business'>
      {NavBar()}
        <p>Forbusiness Page</p>
    </div>
  );
}

export default Forbusiness;