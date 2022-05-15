import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

import icons from '../../public/icons/icons';

import images from '../../public/images/images';

import Sticky from 'react-sticky-el';

const NavBar = () => {

  const [ showNavBar, setShowNavBar ] = React.useState(false);

  const toggleDrawer = () => {
    setShowNavBar((prevState) => !prevState)
  }

  function DropDown () {

    return (
      <div>
          <button className='navBar-parent' onClick={toggleDrawer}
          >
            <img src={icons.white_menu} className='dropDownLogo' alt='menu'/>
          </button>
          <Drawer
            open={showNavBar}
            onClose={toggleDrawer}
            direction='right'
          >
            <div
              className='navBar-components'
            >
              <p className='title'>Menu</p>
              <Link className="urlLinks-navbar" to="/" ><span className='drob-menu'><img src={icons.home} alt='home' className='drob-icon'/><h3>Home</h3></span></Link>
              <Link className="urlLinks-navbar" to="/ourPlaces" ><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Blogs</h3></span></Link>
              <Link className="urlLinks-navbar" to="/questions"><span className='drob-menu'><img src={icons.question} alt='home' className='drob-icon'/><h3>Questions</h3></span></Link>
              <Link className="urlLinks-navbar" to="/forbusiness"><span className='drob-menu'><img src={icons.blogers} alt='home' className='drob-icon'/><h3>For Blogers</h3></span></Link>
              <Link className="urlLinks-navbar" to="/contactus"><span className='drob-menu'><img src={icons.contact} alt='home' className='drob-icon'/><h3>Contact Us</h3></span></Link>
              <Link className="urlLinks-navbar" to="/faq"><span className='drob-menu'><img src={icons.faq} alt='home' className='drob-icon'/><h3>F&Qs</h3></span></Link>
            </div>
          </Drawer>
      </div>
    )
  }

  return (
    <nav className='NavBar'>
      <Link to="/">
        <div className='logo-container'>
          <img src={images.logo} className="logo" alt="travel logo"/>
          <h1 className='logo-text'>Travel Blog</h1>
        </div>
      </Link>
      <div
        className='components'
      >
        <Link className="urlLinks" to="/"><h3>Home</h3></Link>
        <Link className="urlLinks" to="/ourPlaces"><h3>Blogs</h3></Link>
        <Link className="urlLinks" to="/questions"><h3>Questions</h3></Link>
        <Link className="urlLinks" to="/forbusiness"><h3>For Blogers</h3></Link>
        <Link className="urlLinks" to="/contactus"><h3>Contact Us</h3></Link>
        <Link className="urlLinks" to="/faq"><h3>F&Qs</h3></Link>
      </div>
      <div className='navBar'>
        {DropDown()}
      </div>
    </nav>
  );
}

export default NavBar;