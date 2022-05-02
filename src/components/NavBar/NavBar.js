import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/* const logo = require('../../bucket/images/cc_logo.webp');
 */
const white_logo = require('../../bucket/images/white_logo.webp');


const NavBar = () => {

  return (
    <nav className='NavBar'>
        <Link to="/">
          <img src={white_logo} className="logo" alt="chicchic logo"/>
        </Link>
        <div
          className='components'
        >
          <Link className="urlLinks" to="/"><h3>Home</h3></Link>
          <Link className="urlLinks" to="/aboutus"><h3>AboutUs</h3></Link>
          <Link className="urlLinks" to="/questions"><h3>Questions</h3></Link>
          <Link className="urlLinks" to="/contactus"><h3>Contact Us</h3></Link>
          <Link className="urlLinks" to="/forbusiness"><h3>For Business</h3></Link>
          <Link className="urlLinks" to="/faq"><h3>F&Qs</h3></Link>
        </div>
    </nav>
  );
}

export default NavBar;