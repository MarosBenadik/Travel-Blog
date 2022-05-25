import React from 'react';
import { Link } from 'react-router-dom';
import './LogedNavBar.css';

import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

import icons from '../../public/icons/icons';

const LogedNavBar = () => {

  const [ showNavBar, setShowNavBar ] = React.useState(false);

  const [ placeholder, setPlaceholder ] = React.useState(false);

  const toggleDrawer = () => {
    setShowNavBar((prevState) => !prevState)
  }

  function DropDown () {

    return (
        <div className='NavBar'>
          <button className='navBar-parent' onClick={toggleDrawer}>
            <img src={icons.menu} className='dropDownLogo' alt='menu'/>
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
              <Link className="urlLinks-navbar" to="/" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.home} alt='home' className='drob-icon'/><h3>Home</h3></span></Link>
              <Link className="urlLinks-navbar" to="/blogs" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Logout</h3></span></Link>
            </div>
          </Drawer>
      </div>
    )
  }

  return (
    <nav className='logedinNavBar'>
        <div
            className='components'
        >
            <Link to="/" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Home</h3></div></Link>
            <Link className="urlLinks" to="/blogs" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Blogs</h3></div></Link>
        </div>
        <div className='company-name-container'>
            <h1 className='company-name' >Away from Routine!</h1>
        </div>
        <div className='search-component' >
            <button className='search-buttom' onClick={() => placeholder === true ? setPlaceholder(false) : setPlaceholder(true) }>
            <p className='search-icon'>LogOut</p>
            </button>
        </div>
        <div className='navBar'>
            {DropDown()}
        </div>
    </nav>
  );
}

export default LogedNavBar;
