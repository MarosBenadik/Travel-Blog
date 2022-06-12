import React from 'react';
import './Faq.css';

import images from '../../public/images/images';

import NavBar from '../../components/NavBar/NavBar';

import DATA from '../../public/assets/DATA';

import Wetravel from '../../components/Wetravel/Wetravel';

import InstagramSide from '../../components/InstagramSide/InstagramSide';

import AddSide from '../../components/adds/AddSide';

const Faq = () => {

  function faqUsImageComponent() {
    return (
      <div className='faq-image-container'>
        <img src={images.nature} alt='contuctUs' className='questions-image' />
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
            <img src={images.we} alt='us' className='we-image' />
          </div>
          {Wetravel()}
          {AddSide()}
          {InstagramSide()}
        </div>
      </div>
    </div>
  );
}

export default Faq;