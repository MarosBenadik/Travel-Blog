import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';

const PersistLogin = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    const auth = useAuth();

    const { setAuth } = useAuth();

    const refreshToken = sessionStorage.getItem('data')

    useEffect(() => {
        const verifyToken = async () => {
            try {

                const response = await axios.post(`http://localhost:8800/user/verify`, 
                    JSON.stringify({token: refreshToken}),
                    {
                        headers: { 'Content-Type': 'application/json'},
                        AccessControlAllowredentials: true,
                        withCredentials: true
                    });

                setAuth({ data: response.data.token })
            } catch (err) {
                console.log(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth?.data ? verifyToken() : setIsLoading(false);
    }, [ auth.data, refreshToken, setAuth ]);

    return (
        <>
            {isLoading
                ? <p>Is Loading</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin;

