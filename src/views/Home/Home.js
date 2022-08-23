import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import heroku from '../../public/heroku.js';

import images from '../../public/images/images';

import NavBar from '../../components/NavBar/NavBar';

import DATA from '../../public/assets/DATA';

import axios from 'axios';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Slider from "react-slick";

import icons from '../../public/icons/icons';

import StateCard from '../../components/StateCard/StateCard';

const Home = () => {

  const [ explore, setExplore ] = React.useState(DATA.initial_explore);

  const [ state, setState ] = React.useState(DATA.initial_explore.states[0])

  const [ newBlogs, setNewBlogs ] = React.useState([]);

  React.useEffect( () => {
    axios.get(heroku + `/blogs/all`)
      .then(res => {
        const blogs = res.data;

        setNewBlogs(blogs.slice(0,9).sort(function( a, b ) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        }))
      })
  }, [])


  function handleExploreChange(value) {
    const explore_data = DATA.explore.find(x => x.id === value)
    setExplore(explore_data);
  }
  
  function topComponenet() {
    return (
      <div className='top-component'>
        <div className='bacground-text' >
          <Link to="/getinspire" className='text'><img src={icons.idea} alt='idea' className='top-icon' />Get Inspired!</Link>
        </div>
        <div className='bacground-text' >
          <Link to="/guide" className='text'><img src={icons.country_guide} alt='idea' className='top-icon' />Travel Guides!</Link>
        </div>
        <div className='top-logo' >
          <h2>Away from Routine!</h2>
          <p className='subtitle'>Ready, to go ?</p>
        </div>
        <div className='bacground-text' >
          <Link to="/ourjourny" className='text'><img src={icons.journey} alt='idea' className='top-icon' />Our journey!</Link>
        </div>
        <div className='bacground-text' > 
          <Link to="/photos" className='text'><img src={icons.camera} alt='idea' className='top-icon' />Photos!</Link>
        </div>
      </div>
    )
  }

  function NextArrow({onClick}) {
    return (
      <div className='arrow back' onClick={onClick} >
        <FaArrowRight />
      </div>
    )
  }

  function PrevArrow({onClick}) {
    return (
      <div className='arrow next' onClick={onClick} >
        <FaArrowLeft />
      </div>
    )
  }

  function middleComponent() {

    var settings = {
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    function getCountry(id) {
      const country = DATA.states.find(x => x.id === id);
      return country.name;
    }

    return (
      <div className='middle-component'>
        <Slider {...settings}>
          {newBlogs.map((blog, index) => (
            <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }} key={index} className='blogSlide' >
              <div className='inside-blogSlide' key={index}>
                <img src={blog.mainImg} className='slider-image-home' alt='img'/>
                <div className='blog-slider'>
                  <p>{blog.title}</p>
                </div>
                <div className='blog-slider'>
                  <p className='blog-slider-text'>{getCountry(blog.country)}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    )
  }

  function travelEsentialComponent(){

    return (
      <div className='essentials-component'>
        <div className='esentials-header'>
          <h1 className='esentials-title'>Our Travel esentials!</h1>
          <h3>We are the Backpack Traveler, your favorite travel assistants!</h3>
        </div>
        <div className='stock'>
          {DATA.essentials.map((item, index) => (
            <a key={index} href={item.link}>
              <div className='esential-item'>
                <img src={item.image} alt='esentials' className='essential-image' />
              </div>
            </a>
          ))}

        </div>
      </div>
    )
  }

  function instagramComponent() {

    return (
      <div className='instagram-component'>
        <div className='instagram-text'>
          <h1>#I'AMAWAYFROMROUTINE</h1>
          <h2>Tag your photos #I'AMAWAYFROMROUTINE to get featured on our community feed.</h2>
        </div>
      </div>
    )
  }

  function footstepComponent() {
    return (
      <div className='foot-step'>
        <div className='footstep-text'>
          <h1>Our newer-ending Journey !</h1>
          <h2>Discover our journy from beggining.</h2>
        </div>
      </div>
    )
  }

  function singleBlogComponent() {

    return (
      <div className='single-blog'>
        <div className='single-blog-diveder'>
          <div className='single-blog-text'>
            <p className='single-blog-title'>{state.name}</p>
            <p className='single-blog-desc'>{state.desc}</p>
          </div>
          <div className='singlBlog-imgs'>
            <img src={state.image} alt='blog1' className='single-blog-img' />
            <img src={state.image1} alt='blog2' className='single-blog-img1' />
            <p className='subtitle'>{state.subTitle}</p>
          </div>
        </div>
      </div>
    )
  }

  function bottomComponent() {

    return (
      <div className='left-home'>
        {DATA.continents.map((continent, index) => (
          <button key={index} className='pin' onClick={() => handleExploreChange(index)}>
            <img src={icons.pin} alt='pin' className='icon'/><p>{continent.name}</p>
          </button>
        ))}
      </div>
    )
  }

  const StatesWindow = () => {
    return (
      <div className="my-content">
        {explore.states.slice(0,7).map((state, index) => (
            <button key={index} className='state-butom' onClick={() => setState(state)}>
              <StateCard
                key={index}
                pic={state.icon}
                name={state.name}
              />
            </button>
        ))}
      </div>
    );
  };

  function statesComponent() {

    return (
      <div className='states-component'>
        <p className='explore-maintitle'>Explore Places!</p>
        <div className='single-blog-diveder'>
          <div className='states-all'>
            {StatesWindow()}
          </div>
          <div>
            {bottomComponent()}
            <img src={images.map_vector} alt='vector map' className='vector-map' />
          </div>
        </div>
      </div>
    )
  }

  function singUpComponent() {

    return (
      <div className='signt-up'>
        <div className='single-blog-diveder'>
          <div className='signin-input-container'>
              <p className='sign-up-title'>BEST MONEY - SAVING TRAVEL TIPS</p>
              <p>See how we helped real readers plan, save and go on the trip of a lifetime. And get actionable steps you can use to travel anywhere — no matter your income or where you're from!</p>
            <div className='input-data'>
              <div className='form-input'>
                <div className='input-data-placeholder'>
                  <p>First name:</p>
                  <input type="text" id="fname" name="fname" className='placeholder-input' placeholder='First Name'/>
                </div>
                <div className='input-data-placeholder'>
                  <p>Last name:</p>
                  <input type="text" id="lname" name="lname" className='placeholder-input' placeholder='Last Name'/>
                </div>
                <div className='input-data-placeholder'>
                  <p>Email:</p>
                  <input type="email" id="email" name="email" className='placeholder-input' placeholder='Email'/>
                </div>
              </div>
              <div className='submit-buttom'>
                <button type="submit" className='submit'>Subscribe!</button>
              </div>
            </div>
          </div>
          <div className='home-save-tips-container'>
            {/* place for picture */}
          </div>
        </div>
      </div>
    )
  }

  function bottomComponenBlogst() {

    var settings = {
      infinite: true,
      lazyLoad: true,
      speed: 700,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div className='full-middle-component'>
        <Slider {...settings}>
          {newBlogs.map((blog, index) => (
            <div className='single-home-full-slider' key={index}>
              <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }} className='full-blogSlide' >
                <div className='divider-part'>
                  <h3>{blog.title}</h3>
                  <h3>"{blog.cleverQoute}"</h3>
                  <p>Author: {blog.author}</p>
                </div>
                <div className='image-part'>
                  <img src={blog.blogImg} className='slider-image-home-full' alt='img'/>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  function topcategoriesComponent() {

    return (
      <div className='top-categories'>
        <div className='title-container'>
          <p className='top-categories-title'>Get inspired:</p>
          <p className='top-categories-subtitle'>Some of the best blog categories to inpire you!</p>
        </div>
        <div className='categories-icons'>
          {DATA.categories.slice(0,5).map(( category, index ) => (
            <Link style={{ textDecoration: 'none' }} to="/getinspire" key={index}>
              <img src={category.image} alt='category' className='category-icon'/>
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
        <div>
            {bottomComponenBlogst()}
        </div>
      </div>
    )
  }

  function bootomComponent() {

    return (
      <div className='bottom-component'>
        <div className='wetravel'>
          <p>Where we are now!</p>
          <img src={images.map_vector} alt='wetravel' className='wetravel-image'/>
        </div>
        <div>
          <p>Support US!</p>
        </div>
      </div>
    )
  }

  return (
    <div className='home' >
      <div className='navbar'>
          {NavBar()}
      </div>
      {topComponenet()}
      {middleComponent()}
      {travelEsentialComponent()}
      {instagramComponent()}
      {footstepComponent()}
      {statesComponent()}
      {singleBlogComponent()}
      {singUpComponent()}
      {topcategoriesComponent()}
      {bootomComponent()}
    </div>
  );
}

export default Home;