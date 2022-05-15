import React from 'react';
import './OurPlaces.css';

import Slider from 'react-slick';

import images from '../../public/images/images';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import data from '../../public/assets/DATA'

const OurPlaces = () => {

  const slider_images = [images.europe, images.asia, images.australia, images.africa, images.south_amerika, images.north_amerika];

  const [ imageIndex, setImageIndex ] = React.useState(0);

  const [ categoryIndex, setCategory ] = React.useState(0);

  

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

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  }

  const categorySettings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: -10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCategory(next)
  }

  function topComponent() {
    return (
      <div className='map'>
        <Slider {...settings}>
          {slider_images.map((img, index) => (
            <div className={index === imageIndex ? "activeSlide" : "inactiveSlide"} onClick={() => setImageIndex(index)}>
              <img src={img} alt={img} className='img-size'/>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  function middleComponent() {

    const continent = data.continents.find(x => x.id === imageIndex);

    return (
      <div className='middleComponent'>
        <p className='title-text'>{continent.name}</p>
        <div className='desc'>
          <p className='desc-text'>{continent.desc}</p>
        </div>
      </div>
    )
  }

  function categoryComponent() {
    return (
      <div className='category'>
        <Slider {...categorySettings}>
          {data.categories.map((category, index) => (
            <div className={index === categoryIndex ? "activeCategory" : "inactiveCategory"} onClick={() => setCategory(index)}>
              <img src={category.image} alt={category.name} className='category-image'/>
              <p className='category-name'>{category.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  function blogsComponent() {

    const curent_category = data.categories.find(x => x.id === categoryIndex);

    console.log(curent_category);

    return (
      <div className='blogs'>
        <div className='right-part'>
        <p className='newest'>{curent_category.name}</p>
        </div>
        <div className='left-part'>
          <p className='recomended'>Recomended Blogs</p>
        </div>
      </div>
    )
  }

  return (
    <div className='OurPlaces'>
        {topComponent()}
        {middleComponent()}
        {categoryComponent()}
        {blogsComponent()}
    </div>
  );
}

export default OurPlaces;