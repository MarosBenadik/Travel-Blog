import React from 'react';
import './InstagramSide.css';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import DATA from '../../public/assets/DATA';

import Slider from "react-slick";

const InstagramSlider = () => { 

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

export default InstagramSlider;