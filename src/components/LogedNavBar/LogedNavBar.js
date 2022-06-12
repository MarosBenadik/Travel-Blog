import React from 'react';
import { Link } from 'react-router-dom';
import './LogedNavBar.css';

import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

import icons from '../../public/icons/icons';

const LogedNavBar = () => {

  const [ showNavBar, setShowNavBar ] = React.useState(false);

  const toggleDrawer = () => {
    setShowNavBar((prevState) => !prevState)
  }

  const handleLogOut = () => {
    sessionStorage.removeItem('data')

  }

  function DropDown () {

    return (
        <div className='logedinNavBar-parent'>
          <button className='logedinNavBar-parent' onClick={toggleDrawer}>
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
              <Link className="urlLinks-navbar" to="/dashboard" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Dashboard</h3></span></Link>
              <Link className="urlLinks-navbar" to="/createblog" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Create Blog</h3></span></Link>
              <Link className="urlLinks-navbar" to="/createjourny" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Add Country</h3></span></Link>
              <Link className="urlLinks-navbar" to="/signups" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>New SignUps</h3></span></Link>
              <Link className="urlLinks-navbar" to="/businesscontuct" style={{ textDecoration: 'none' }}><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Business Contacts</h3></span></Link>
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
          <Link className="urlLinks" to="/dashboard" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Dashboard</h3></div></Link>
          <Link className="urlLinks" to="/createblog" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Create Blog</h3></div></Link>
          <Link className="urlLinks" to="/createjourny" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Add Country</h3></div></Link>
          <Link className="urlLinks" to="/signups" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>New SignUps</h3></div></Link>
          <Link className="urlLinks" to="/businesscontuct" style={{ textDecoration: 'none' }}><div className='urlLinks'><h3 className='urlinks-text'>Business Contacts</h3></div></Link>
        </div>
        <div className='company-name-container'>
            <h1 className='company-name' >Away from Routine!</h1>
        </div>
        <div className='logedinNavBar-parent'>
            {DropDown()}
        </div>
        <div className='loged-in-logout'>
          <button type="submit" onClick={ () => handleLogOut()} className='logout-buttom'><div className='urlLinks'><h3 className='urlinks-text'>log out</h3></div></button>
        </div>
    </nav>
  );
}

export default LogedNavBar;
