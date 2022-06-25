import React from 'react';

import './State.css';

import NavBar from '../../components/NavBar/NavBar';


const State = () => {

    return (
        <div className='OurJourny-page'>
            {NavBar()}
            <div className='ourjourny-data'>
               
            </div>
        </div>
    );
}

export default State;