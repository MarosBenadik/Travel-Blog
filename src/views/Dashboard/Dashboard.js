import React from 'react';
import icons from '../../public/icons/icons';

import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';

import axios from 'axios';

import "./Dashboard.css"

const Dashboard = () => {

    const [ messages, setMessages ] = React.useState([]);

    React.useEffect( () => {
        axios.get(`http://localhost:8800/contuct-us/all`)
          .then(res => {
            const messages = res.data;
    
            setMessages(messages.slice(0,5))
        })

        {/* business contacts */}
    }, [])

    const messagesDash = () => {
        return (
            <div>
                <span><h3>Contucted us:</h3><p>... more</p></span>
                {messages.map(( message, index ) => (
                    <div key={index} className='message'>
                        <h3>{message.name}</h3>
                        <h4>{message.email}</h4>
                        <p>
                            Message: {message.message}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    const businessContacts = () => {
        return (
            <div>
                <span><h3>Business Contucts:</h3><p>... more</p></span>
                {messages.map(( message, index ) => (
                    <div key={index} className='message'>
                        <h3>{message.name}</h3>
                        <h4>{message.email}</h4>
                        <p>
                            Message: {message.message}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {LogedNavBar()}
            <div className='dashboard'>
                <div className='dashboard-messages'>
                    {messagesDash()}
                </div>
                <div className='dashboard-messages'>
                    {businessContacts()}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;