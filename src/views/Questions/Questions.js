import React from 'react';
import './Questions.css';
import '../OurPlaces/OurPlaces.css'

import Slider from 'react-slick';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import data from '../../public/assets/DATA'
import icons from '../../public/icons/icons';

const Questions = () => {

  const [ categoryIndex, setCategory ] = React.useState(0);

  const [query, setQuery] = React.useState("")

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
    slidesToShow: 6,
    centerMode: true,
    centerPadding: -10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCategory(next)
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

  function questionHeader() {
    const curent_category = data.categories.find(x => x.id === categoryIndex);

    return (
      <div className='questionheader'>
        <p className='chooseCategory'>Choose Category!</p>
        <p className='headline'>And ask our blogers Questions!</p>
        <p className='chosencategory'>Category: {curent_category.name}</p>
      </div>
    )
  }

  function searchComponent() {
    return (
      <div className='search'>
        <img src={icons.search} alt='search' className='search-icon'/>
        <input className='search-bar' placeholder='Search'  onChange={event => setQuery(event.target.value)} />
      </div>
    )
  }

  function questionsComponent() {

    return (
      <div className='questions'>
        <div className='left'>
          <div className='askquestion'>
            <p className='listQuestions'>Questions</p>
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
        {categoryComponent()}
        {questionHeader()}
        {searchComponent()}
        {questionsComponent()}
    </div>
  );
}

export default Questions;