import React from 'react';
import './Contactus.css';

import images from '../../public/images/images';

import NavBar from '../../components/NavBar/NavBar';

import DATA from '../../public/assets/DATA';

import axios from 'axios';

import backend from '../../public/heroku.js';

import AddFull from '../../components/adds/AddFull';

const Contuctus = () => {

  const [ name, setName ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ message, setMessage ] = React.useState("");
  const [ popup, setPopUp ] = React.useState("");

  console.log(popup)

  async function handleSubmit() {
    const body = {
      name: name,
      email: email,
      message: message
    }

    console.log("here1")

    await axios({
      method: "post",
      url: backend + "/contuct-us/add",
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

  function contuctUsImageComponent() {
    return (
      <div className='contact-us-image-container'>
        <img src={images.contuctUs_img} alt='contuctUs' className='contact-us-image' />
      </div>
    )
  }

  function contuctUsMiddleComponent() {
    return (
      <div className='contuct-us-divider'>
        <div className='contuctUs-img'>
         
        </div>
        <div className='placeholder-container'>
          <p className='contuct-us-title'>GET IN TOUCH</p>
          <p className='contuct-us-title-body'>For all business and collaboration enquiries please visits for blogers page. For any other enquiries please use the form below. ? 🙂</p>
          <div className='contuctus-placeholders' >
            <input type="text" className='names' placeholder="Name" name="name" onChange={(value) => setName(value.target.value)}/>
            <input type="email" className='names' placeholder="Email" name="email" onChange={(value) => setEmail(value.target.value)}/>
            <textarea type="text" className='message' placeholder="Message" name="message" onChange={(value) => setMessage(value.target.value)}/>
            <button className='contuctus-buttom' onClick={() => { 
              handleSubmit() 
              setPopUp('success')
            }}>Submit</button>
          </div>
        </div>
      </div>
    )
  }

  function OurPrintsComponent() {

    return (
      <div className='our-prints'>
        <div className='esentials-header'>
          <h1 className='esentials-title'>Have a Look on our MERCH!</h1>
          <h3>Collection of all essentials on your way avay from Routine!</h3>
        </div>
        <div className='stock'>
          {DATA.essentials.map((item, index) => (
            <a href={item.link}>
              <div key={index} className='esential-item'>
                <img src={item.image} alt='esentials' className='essential-image' />
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='contact'>
      {NavBar()}
      {contuctUsImageComponent()}
      {AddFull()}
      {contuctUsMiddleComponent()}
      {OurPrintsComponent()}
    </div>
  );
}

export default Contuctus;