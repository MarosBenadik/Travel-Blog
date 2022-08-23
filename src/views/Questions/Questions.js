import React from 'react';
import './Questions.css';
import '../OurPlaces/OurPlaces.css'

import Slider from 'react-slick';

import NavBar from '../../components/NavBar/NavBar';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import data from '../../public/assets/DATA'

import icons from '../../public/icons/icons';

import images from '../../public/images/images';

import axios from 'axios';

import backend from '../../public/heroku.js';

import Moment from 'react-moment';

const Questions = () => {

  const [ name, setName ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ message, setMessage ] = React.useState("");

  const [ categoryIndex, setCategory ] = React.useState(0);

  const [ query, setQuery ] = React.useState("");

  const [ askQuestion, showAskQuestion ] = React.useState(false);


  const [ questions, setQuestions ] = React.useState([]);

  const [ usedQuestions, setUsedQuestions ] = React.useState([]);

  React.useEffect( () => {
    axios.get(backend + `/questions/all`)
      .then(res => {
        const questions = res.data;
        setQuestions(questions)
      })
  }, [])

  function handleBlogsChange(next) {
    const qurent_questions = questions.filter(x => x.category === next );
    setUsedQuestions(qurent_questions)
    setCategory(next)
  }

  console.log({usedQuestions: usedQuestions});
  console.log({questions: questions});

  async function handleSubmit() {
    const body = {
      name: name,
      email: email,
      message: message,
      category: categoryIndex,
    }

    console.log(body)

    await axios({
      method: "post",
      url: backend + "/questions/add",
      data: body,
      headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (err) {
      //handle error
      console.log(err);
    });
  }

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
    beforeChange: (current, next) => handleBlogsChange(next)
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

  function askQuestionComponent() {

    return (
      <div className='ask-question-input'>
        <div className='credentials'>
          <label for="name">Enter Your Name:</label>
          <input type="text" className='name' placeholder="Name" name="name" onChange={(value) => setName(value.target.value)}/>
          <label for="email">Enter Your Email:</label>
          <input type="email" className='name' placeholder="Email" name="email" onChange={(value) => setEmail(value.target.value)}/>
        </div>
        <div className='question-message'>
          <label for="message">Write your Question:</label>
          <input type="text" className='message' placeholder="Message" name="message" onChange={(value) => setMessage(value.target.value)}/>
            <button className='contuctus-buttom' onClick={() => { 
              handleSubmit() 
            }}>Submit</button>
        </div>
      </div>
    )
  }

  function questionsComponent() {

    return (
      <div className='questions'>
        <div className='left'>
          <div className='askquestion'>
            <p className='listQuestions'>Questions: {usedQuestions.length}</p>              
            <button className='ask-text' onClick={() => askQuestion === false ? showAskQuestion(true) : showAskQuestion(false)} >Ask Question</button>
          </div>
          { askQuestion && askQuestionComponent()}
          <div className='question-list'>
            {usedQuestions.map((question, index) => (
              <div key={index} className='single-question'>
                <div className='question-user'>
                  <p className='question-name'>{question.name} asked question:</p>
                  <Moment fromNow>{question.createdAt}</Moment>
                </div>
                <div className='question-body'>
                  <h2>{question.message}</h2>
                  <button className='response-icon-button'><img src={icons.menu} alt='response' className='response-icon'/></button>
                </div>
              </div>
            ))}
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