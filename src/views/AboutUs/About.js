import React from 'react';

import './About.css';
import '../Home/Home.css'

import { Link } from 'react-router-dom';

import icons from '../../public/icons/icons';

import NavBar from '../../components/NavBar/NavBar';
import images from '../../public/images/images';

import ReactPlayer from 'react-player';

const About = () => {

  function topComponenet() {
    return (
      <div className='top-component'>
        <div className='bacground-text' >
          <Link to="/ourPlaces" className='text'><img src={icons.idea} alt='idea' className='top-icon' />Get Inspired!</Link>
        </div>
        <div className='bacground-text' >
          <Link to="/ourPlaces" className='text'><img src={icons.country_guide} alt='idea' className='top-icon' />Travel Guides!</Link>
        </div>
        <div className='top-logo' >
          <h2>Away from Routine!</h2>
          <p className='subtitle'>Ready, to go ?</p>
        </div>
        <div className='bacground-text' >
          <Link to="/ourPlaces" className='text'><img src={icons.journey} alt='idea' className='top-icon' />Our journey!</Link>
        </div>
        <div className='bacground-text' >
          
          <Link to="/ourPlaces" className='text'><img src={icons.todo} alt='idea' className='top-icon' />Bucket list!</Link>
        </div>
      </div>
    )
  }

  function photoComponent() {
    return (
      <div>
        <img className='aboutUs-img' alt='about-us' src={images.we_aboutus1}/>
      </div>
    )
  }

  function aboutusTopCompoment() {
    return (
      <div className='top-component-divider'>
        <div className='about-us-divided'>
          <p className='about-us-divided-text'>WHO’S WE ARE? 👫🏼 </p>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
        </div>
        <div className='about-us-divided'>
          <p  className='about-us-divided-text'>WHERE TO TRAVEL? 🚀</p>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis biben. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
        </div>
        <div className='about-us-divided'>
          <p  className='about-us-divided-text'>POPULAR TOURS! 🏛️</p>
          <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat ? 😍</p>
        </div>
      </div>
    )
  }

  function cleverThingComponent() {
    return (
      <div className='cleverThing-component'> 
        <div className='clever-thing'>
          <div className='clever-thing-border'>
            <p className='about-clever-text'>"Travel is the thing you buy that makes you richer"</p>
            <span className='about-us-inline'><p>#</p><p>AwayfromRoutine</p></span>
          </div>
        </div>
        <div className='why-we-travel-divider-component'>
          <div className='text-side'>
            <h1>Why we Travel!</h1>
            <p className='text-side-middleText'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna.</p>
            <p className='text-side-middleText'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna.</p>
            <p className='text-side-middleText'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna.</p>
          </div>
          <div className='images-side'>
            <img src={images.we_aboutus2} alt='aboutus-img2' className='about-img2' />
            <img src={images.we_aboutus3} alt='aboutus-img3' className='about-img3' />
            <h3 className='image-side-text'>“It's better to see something once than to hear about it a thousand times.”</h3>
          </div>
        </div>
      </div>
    )
  }

  function videoComponent() {
    return (
      <div className='video-component'>
        <h2>HI! WE ARE COUPLE WHO LIVES FOR TRAVEL:) LET’S GO TRAVEL</h2>
        <div className='video-container'>
          {/* video here */}
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=7lvXbfNBIQg'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    )
  }

  function bottomContainer() {
    return (
      <div className='bottom-container'>
        <h2>WHAT READERS SAY ABOUT US!</h2>
        <p>See how WE’ve helped others save money and plan trips of their lifetime</p>
        <div className='reader-container'>
          <div className='single-reader-container'>
            <img alt='reader-img' className='reader-img'/>
            <h3>Michalea</h3>
            <p className='reader-text'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis.</p>
          </div>
          <div className='single-reader-container'>
            <img alt='reader-img' className='reader-img'/>
            <h3>Martin</h3>
            <p className='reader-text'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis.</p>
          </div>
          <div className='single-reader-container'>
            <img alt='reader-img' className='reader-img'/>
            <h3>James</h3>
            <p className='reader-text'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis.</p>
          </div>
          <div className='single-reader-container'>
            <img alt='reader-img' className='reader-img'/>
            <h3>Victoria</h3>
            <p className='reader-text'>Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='about'>
      {NavBar()}
      {topComponenet()}
      {photoComponent()}
      {aboutusTopCompoment()}
      {cleverThingComponent()}
      {videoComponent()}
      {bottomContainer()}
    </div>
  );
}

export default About;