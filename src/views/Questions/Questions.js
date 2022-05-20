import React from 'react';
import './Questions.css';
import '../OurPlaces/OurPlaces.css'

import Slider from 'react-slick';

import NavBar from '../../components/NavBar/NavBar';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import data from '../../public/assets/DATA'

import icons from '../../public/icons/icons';

import images from '../../public/images/images';

const Questions = () => {

  const [ categoryIndex, setCategory ] = React.useState(0);

  const [ query, setQuery ] = React.useState("")

  console.log(query)

  function questionImageComponent() {
    return (
      <div className='question-image-container'>
        <img src={images.question} alt='contuctUs' className='contact-us-image' />
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

  const categorySettings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: -10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCategory(next)
  }

  function categoryComponent() {

    return (
      <div className='question-category'>
        <h2 className='category-title-top'>Categories</h2>
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

  function questionHeader() {
    const curent_category = data.categories.find(x => x.id === categoryIndex);

    return (
      <div className='questionheader'>
        <p className='chooseCategory'>Choose Category!</p>
        <p className='headline'>And ask us Questions!</p>
        <p className='chosencategory'>Category: {curent_category.name}</p>
      </div>
    )
  }

  function searchComponent() {
    return (
      <div className='search'>
        <input className='search-bar' placeholder='Search' name="search" onChange={(value) => setQuery(value.target.value)} />
        <img src={icons.search} alt='search' className='search-icon'/>
      </div>
    )
  }

  function questionsComponent() {

    return (
      <div className='questions'>
        <div className='left'>
          <div className='askquestion'>
            <p className='listQuestions'>Questions: 12</p>
            <button className='ask-text' onClick={() => console.log("ask question")} >Ask Question</button>
          </div>
        </div>
        <div className='right'>
          <p className='ourbloger'>Our Blogers</p>
        </div>
      </div>
    )
  }

  return (
    <div className='question'>
      {NavBar()}
        {questionImageComponent()}
        {categoryComponent()}
        {questionHeader()}
        {searchComponent()}
        {questionsComponent()}
    </div>
  );
}

export default Questions;