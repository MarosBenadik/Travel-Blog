import { createContext, useState } from 'react';

const AuthoContext = createContext({});

export const AuthoProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({})

    return (
        <AuthoContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthoContext.Provider>
    )
}

export default AuthoContext;