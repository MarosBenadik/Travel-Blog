import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const logo = require('../../public/cc_logo.webp');


const NavBar = () => {

  return (
    <nav className='NavBar'>
        <Link to="/">
          <img src={logo} className="logo" alt="chicchic logo"/>
        </Link>
        <div
          className='components'
        >
          <Link className="urlLinks" to="/"><h3>Home</h3></Link>
          <Link className="urlLinks" to="/aboutus"><h3>AboutUs</h3></Link>
          <Link className="urlLinks" to="/questions"><h3>Questions</h3></Link>
          <Link className="urlLinks" to="/faq"><h3>F&Qs</h3></Link>
        </div>
    </nav>
  );
}

export default NavBar;