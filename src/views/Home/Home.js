import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import images from '../../public/images/images';

import DATA from '../../public/assets/DATA';

import icons from '../../public/icons/icons';

import StateCard from '../../components/StateCard/StateCard';

import { ScrollableComponentElement } from "scrollable-component";



const Home = () => {

  const initial_explore = {
    id: 6,
    name: "Favorit Locations",
    states: [
      {
        id: 0,
        name: "Spain",
        icon: icons.spain
      },{ 
        id: 0,
        name: "Italy",
        icon: icons.italy
      },{ 
        id: 0,
        name: "United Kingdom",
        icon: icons.uk
      },{ 
        id: 0,
        name: "Norway",
        icon: icons.norway
      },{ 
        id: 0,
        name: "Greece",
        icon: icons.greece
      },{ 
        id: 0,
        name: "United Kingdom",
        icon: icons.uk
      },{ 
        id: 0,
        name: "Slovakia",
        icon: icons.sk
      } ]
  }

  const [ explore, setExplore ] = React.useState(initial_explore);

  function handleExploreChange(value) {
    const explore_data = DATA.explore.find(x => x.id === value)
    setExplore(explore_data);
  }
  
  function topComponenet() {
    return (
      <div className='top-component'>
        <img src={images.wings} className='main-image' alt='main' />
        <div className='bacground-text' >
          <Link to="/ourPlaces" className='text'>Explore Places With Us</Link>
        </div>
      </div>
    )
  }

  function middleComponent() {
    return (
      <div className='middle-component'>
        <div className='header-background'>
          <p className='header'>Newest Blogs:</p>
        </div>

      </div>
    )
  }

  function bottomComponent() {


    const ContactWindow = () => {
      return (
        <scrollable-component class="my-content">
          {explore.states.map((state, index) => {
            return (
              <StateCard
                key={index}
                pic={state.icon}
                name={state.name}
              />
            );
          })}
        </scrollable-component>
      );
    };

    return (
      <div className='bottom-component'>
        <p className='explore'>Explore By Destination:</p>
        <div className='explore-container'>
          <div className='right-container'>
            <h3>{explore.name}</h3>
            <div className='list-scroll'>
              {ContactWindow()}
            </div>
          </div>
          <div className='left'>
            <img src={images.map} alt='map' className='map-img'/>
            <button className='pin' onClick={() => handleExploreChange(0)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
            <button className='pin1' onClick={() => handleExploreChange(1)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
            <button className='pin2' onClick={() => handleExploreChange(2)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
            <button className='pin3' onClick={() => handleExploreChange(5)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
            <button className='pin4' onClick={() => handleExploreChange(3)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
            <button className='pin5' onClick={() => handleExploreChange(4)}>
              <img src={icons.pin} alt='pin' className='icon'/>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='home' >
      {topComponenet()}
      {middleComponent()}
      {bottomComponent()}
    </div>
  );
}

export default Home;