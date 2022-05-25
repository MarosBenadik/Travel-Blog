import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

import useAuth from '../../hooks/useAuth';

import axios from 'axios';

import "./Login.css"

const Login = () => {

    const { setAuth } = useAuth();

    const userRef = React.useRef();
    const errRef = React.useRef();

    const [user, setUser] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [errMsg, setErrMsg] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    const navigate = useNavigate();

    React.useEffect(() => {
        userRef.current.focus();
    }, []);

    React.useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:8800/user/login`, 
                JSON.stringify({email: user, password: pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    AccessControlAllowredentials: true,
                    withCredentials: true
                }
            );
            const data = response?.data;

            setAuth({data: data.tokens.accessToken})
            setUser('')
            setPwd('')

            sessionStorage.setItem('data', data.tokens.refreshToken);
            
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unathorized');
            } else {
                setErrMsg('Login Faild');
            }
            errRef.current.focus();
        }
        
    }

    return (
        <div>
            {NavBar()}
            {success ? (
            
                <section>
                    <h1>You are Logged in!</h1>
                    <br/>
                    <Link to='/dashboard' >Enter Dashboard</Link>
                </section>) : (
            
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscrean"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <span className='goback'><h1>Log In</h1><h4 onClick={()=> navigate(-1)}>Go Back!</h4></span>
                        <label htmlFor='email'>Email:</label>
                        <input className='input-login' type="email" id="email"  ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required/>
                        <label htmlFor='password'>Password:</label>
                        <input className='input-login' type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required/>
                        <button>Sign In</button>
                    </form>

                </section>)
            }
        </div>
    )
}

export default Login;