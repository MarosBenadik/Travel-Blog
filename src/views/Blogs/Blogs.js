import React from 'react';

import './Blogs.css';

import NavBar from '../../components/NavBar/NavBar';

const Blogs = () => {


  return (
    <div className='blogs-page'>
      {NavBar()}
      <div>
        <p>Blogs</p>
      </div>
    </div>
  );
}

export default Blogs;