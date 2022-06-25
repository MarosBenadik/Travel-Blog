import React from 'react';

import './Guide.css';

import DATA from '../../public/assets/DATA';

import {useLocation} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import icons from '../../public/icons/icons';
import AddFull from '../../components/adds/AddFull';

const Guide = () => {

  const location = useLocation()

  const [ continent, setContinent ] = React.useState(null);

  React.useEffect( () => {
    if(location.state === null){
      setContinent(null)
    } else {
      const continent = DATA.continents.find(x => x.id === location.state)
      setContinent(continent.name)
    }
  }, [])

  function recomendationComonent() {
    return (
      <div className='guide-top-main'>
        <div className='guide-top'>
          <h1>Plan a trip {continent === null ? "." : "in " + continent + "."}</h1>
        </div>
        <div className='recomendation-guide'>
          <div className='guide-part'>
            <h2>Find Cheap Flights</h2>
            <div className='single-part'>
              <img src={icons.plane} alt='flight' className='guide-icon'/>
              <h4>Find cheap flights on SkyScanner</h4>
            </div>
            <div className='single-part'>
              <img src={icons.airport} alt='flight' className='guide-icon'/>
              <h4>Find cheap flights on RyanAir</h4>
            </div>
            <div className='single-part'>
              <img src={icons.plane} alt='flight' className='guide-icon'/>
              <h4>Find cheap flights on WizzAir</h4>
            </div>
          </div>
          <div className='guide-part'>
            <h2>Find Cheap Accomodation:</h2>
            <div className='single-part'>
              <img src={icons.bed} alt='flight' className='guide-icon'/>
              <h4>Find cheap Accomodation on  AirBNB</h4>
            </div>
            <div className='single-part'>
              <img src={icons.hotel} alt='flight' className='guide-icon'/>
              <h4>Find cheap Accomodation on Booking</h4>
            </div>
            <div className='single-part'>
              <img src={icons.rent} alt='flight' className='guide-icon'/>
              <h4>Find cheap flights on Something</h4>
            </div>
          </div>
          <div className='guide-part'>
            <h2>Any other essentials:</h2>
            <div className='single-part'>
              <img src={icons.mountains} alt='flight' className='guide-icon'/>
              <h4>What to do.</h4>
            </div>
            <div className='single-part'>
              <img src={icons.car} alt='flight' className='guide-icon'/>
              <h4>Rent a Car</h4>
            </div>
            <div className='single-part'>
              <img src={icons.bus} alt='flight' className='guide-icon'/>
              <h4>Find transport informations.</h4>
            </div>
            <div className='single-part'>
              <img src={icons.ticket} alt='flight' className='guide-icon'/>
              <h4>Cheap Tickets.</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ourGuides() {
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

  return (
    <div className='OurJourny-page'>
        {NavBar()}
        <div>
            {recomendationComonent()}
            {AddFull()}
            <div className='single-part'>
              <h1>Sign Up to our news letter. Best money savings tips and travel guide!</h1>
            </div>
            {ourGuides()}
        </div>
    </div>
  );
}

export default Guide;