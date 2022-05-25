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
    
            setMessages(messages)
          })
    }, [])

    console.log(sessionStorage.getItem('data'));

    return (
        <div>
            {LogedNavBar()}
            <div className='dashboard'>
                <div className='dashboard-messages'>
                    <h1>Contucted us:</h1>
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
                <div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;