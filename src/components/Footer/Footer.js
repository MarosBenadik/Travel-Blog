import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../public/icons/icons';
import "./Footer.css"

const Footer = () => {

  return (
    <div className='footer'>
      <div className='urllinks-container'>
        <div className='urllinks'>
          <div className='link'>
            <h3 className='link-text-container' >TRAVEL BLOG</h3>
            <Link className='link-text' to="/">Home</Link>
            <Link className='link-text' to="/aboutus">About Us</Link>
            <Link className='link-text' to="/questions">Questions</Link>
            <Link className='link-text' to="/FAQ">FAQ</Link>
          </div>
          <div className='link'>
            <h3 className='link-text-container' >Legal</h3>
            <Link className='link-text' to="/contactus">Contact Us</Link>
            <Link className='link-text' to="/terms">Therms of use</Link>
            <Link className='link-text' to="/privacy">Privacy policy</Link>
          </div>
          <div className='link'>
            <h3 className='link-text-container' >Follow Us On</h3>
            <div className='link-socialMedia' >
              <a href="https://www.facebook.com/chicchicapp/" title="Facebook"><img className='icons' src={icons.facebook} alt='Facebook'/></a>
              <a href="https://www.linkedin.com/company/chicchic/" title="Linkedin"><img className='icons' src={icons.instagram} alt='linkedIn'/></a>
              <a href="https://www.instagram.com/chicchicapp/" title="Instagram"><img className='icons' src={icons.linkedin} alt='Instagram'/></a>
            </div>
            <div className='link'>
              <h3 className='link-text-container' >Support us</h3>
              <div className='link-socialMedia' >
                <a href="https://www.facebook.com/chicchicapp/" title="Facebook"><img className='icons' src={icons.facebook} alt='Facebook'/></a>
                <a href="https://www.linkedin.com/company/chicchic/" title="Linkedin"><img className='icons' src={icons.instagram} alt='linkedIn'/></a>
                <a href="https://www.instagram.com/chicchicapp/" title="Instagram"><img className='icons' src={icons.linkedin} alt='Instagram'/></a>
              </div>
            </div>
          </div>
          <div className='link'>
            <h3 className='link-text-container' >Have Account?</h3>
            <Link className='link-text-logIn' to='/login'>Log In</Link>
          </div>
        </div>
      </div>
      <div className='cc'>
        <p className='cc-text' >&copy; 2022 AWAY FROM ROUTINE LTD.</p>
      </div>
    </div>
  );
}

export default Footer;