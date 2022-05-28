import React from 'react';

import './OurJourny.css';

import axios from 'axios';

import NavBar from '../../components/NavBar/NavBar';

import images from '../../public/images/images';

import DATA from '../../public/assets/DATA';

import { Image, Transformation } from 'cloudinary-react';

const OurJourny = () => {

    const [ journies, setJournies ] = React.useState([]);

    React.useEffect( () => {
        axios.get(`http://localhost:8800/journy/all`)
          .then(res => {
            const journy = res.data;
    
            setJournies(journy.sort((a, b) => b.year - a.year))
          })
    }, [])

    function getState(id) {
        const state = DATA.states.find(e => e.id === id)
        return state.name;
    }

    function getFlag(id) {
        const state = DATA.states.find(e => e.id === id)
        return state.icon;
    }

    return (
        <div className='OurJourny-page'>
            {NavBar()}
            <div className='ourjourny-data'>
                {journies.map((journy, index) => (
                    <div key={index} className='single-journy'>
                        <div className='journy-desc-container'>
                            <div className='journy-image'>
                                <Image key={index} cloudName="ditsdxnax" publicId={journy.img}>
                                    <Transformation dpr="auto" height="150" responsive width="auto" gravity="south" crop="fit" />
                                    <Transformation effect="art:hokusai" />
                                    <Transformation border="3px_solid_rgb:edcac6" />
                                </Image>
                            </div>
                            <div className='journy-text'>
                                <p className='journy-city'>{journy.city}</p>
                                <span className='journy-inline'><img src={getFlag(journy.state)}/><h4>{getState(journy.state)}</h4></span>
                                <h3>{journy.year}</h3>
                                <h4 className='h4-journy'>{journy.desc}</h4>
                            </div>
                        </div>
                        <div className='journy-image-container'>
                            <img src={index % 2 === 0 ? images.path : images.path1} alt='path' className='path-image' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurJourny;