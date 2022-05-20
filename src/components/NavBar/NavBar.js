import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

import icons from '../../public/icons/icons';

const NavBar = () => {

  const [ showNavBar, setShowNavBar ] = React.useState(false);

  const [ placeholder, setPlaceholder ] = React.useState(false);

  const toggleDrawer = () => {
    setShowNavBar((prevState) => !prevState)
  }

  function searchplaceholder() {

    return (
      <div>
        <input className='search-placeholder' type="text" id="search" name="search"/>
      </div>
    )
  }


  function DropDown () {

    return (
      <div>
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
              <Link className="urlLinks-navbar" to="/" ><span className='drob-menu'><img src={icons.home} alt='home' className='drob-icon'/><h3>Home</h3></span></Link>
              <Link className="urlLinks-navbar" to="/blogs" ><span className='drob-menu'><img src={icons.blog} alt='home' className='drob-icon'/><h3>Blogs</h3></span></Link>
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
      <Link to="/ourPlaces">
        <div className='logo-container'>
          <img src={icons.globe} className="destination" alt="travel logo"/>
          <h3 className='logo-text'>Destinations</h3>
        </div>
      </Link>
      <div
        className='components'
      >
        <Link to="/"><div className='urlLinks'><h3 className='urlinks-text'>Home</h3></div></Link>
        <Link className="urlLinks" to="/blogs"><div className='urlLinks'><h3 className='urlinks-text'>Blogs</h3></div></Link>
        <Link className="urlLinks" to="/questions"><div className='urlLinks'><h3 className='urlinks-text'>Questions</h3></div></Link>
        <Link className="urlLinks" to="/forbusiness"><div className='urlLinks'><h3 className='urlinks-text'>For Blogers</h3></div></Link>
        <Link className="urlLinks" to="/contactus"><div className='urlLinks'><h3 className='urlinks-text'>Contact Us</h3></div></Link>
        <Link className="urlLinks" to="/faq"><div className='urlLinks'><h3 className='urlinks-text'>F&Qs</h3></div></Link>
      </div>
      <div className='company-name-container'>
        <h1 className='company-name' >Away from Routine!</h1>
      </div>
      <div className='search-component' >
        <button className='search-buttom' onClick={() => placeholder === true ? setPlaceholder(false) : setPlaceholder(true) }>
          <img src={icons.search} alt='search-navbar' className='search-icon'/>
        </button>
        {placeholder && searchplaceholder()}
      </div>
      <div className='navBar'>
        {DropDown()}
      </div>
    </nav>
  );
}

export default NavBar;