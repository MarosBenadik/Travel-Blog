import React from 'react';
import './About.css';

import NavBar from '../../components/NavBar/NavBar';

const About = () => {
  return (
    <div className='about'>

      {NavBar()}

      <p>About</p>
    </div>
  );
}

export default About;