import React from 'react';
import './Faq.css';

import images from '../../public/images/images';

import NavBar from '../../components/NavBar/NavBar';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import DATA from '../../public/assets/DATA';

import Slider from "react-slick";

const Faq = () => {

  function faqUsImageComponent() {
    return (
      <div className='faq-image-container'>
        <img src={images.nature} alt='contuctUs' className='questions-image' />
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

  function bottomComponenInstagram() {

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
      <Slider {...settings}>
        {DATA.instagram.map((post, index) => (
          <div key={index} className='single-post' onClick={() => console.log("blog")}>
            <img src={post.post} alt='post' className='post-img'/>
          </div>
        ))}
      </Slider>
    )
  }

  function instagramComponent() {

    return (
      <div className='instagram-component'>
        <div className='instagram-text'>
          <p className='instagram-faq'>Tag your photos #I'AMAWAYFROMROUTINE to get featured on our community feed.</p>
          <div className='instagram-post-holder'>
            {bottomComponenInstagram()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='faq'>
      {NavBar()}
      {faqUsImageComponent()}
      <div className='faq-divider'>
        <div className='questions-container'>
          {DATA.questions.map((question, index) => (
            <div key={index} className='single-question-container'>
              <p className='questions-title'>{question.title}</p>
              <p>{question.response}</p>
            </div>
          ))}
        </div>
        <div className='side-component'>
          <div className='img-faq'>
            <img src={images.we} al='us' className='we-image' />
          </div>
          <div className='img-faq'>
            <h2>Where We Are planing to go next?</h2>
            <h4>{DATA.curentLocation.name}</h4>
            <img src={images.map_vector} al='map' className='we-image'/>
          </div>
          {instagramComponent()}
        </div>
      </div>
    </div>
  );
}

export default Faq;