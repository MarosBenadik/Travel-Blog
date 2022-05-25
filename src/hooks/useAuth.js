import  { useContext } from 'react';
import AuthoContext from '../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthoContext);
}

export default useAuth;