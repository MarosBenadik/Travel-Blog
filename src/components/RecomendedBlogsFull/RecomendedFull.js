import React from 'react';
import './RecomendedFull.css';

import DATA from '../../public/assets/DATA';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Slider from "react-slick";

import { Link } from 'react-router-dom';

const RecomendedFull = () => { 

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

  var settings = {
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

  return (
      <div className='slider-recomended-component'>
          <Slider {...settings}>
          {DATA.continents.map((blog, index) => (
              <div key={index} className='recomended-blogSlide' >
                  <div className='slider-inside-blogSlide' onClick={() => {}}>
                      <Link style={{ textDecoration: 'none' }} state={blog.id} to="/guide" key={index}>{blog.name}</Link>
                  </div>
              </div>
          ))}
          </Slider>
      </div>
  )
}

export default RecomendedFull;