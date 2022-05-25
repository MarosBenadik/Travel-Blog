import axios from "axios";
import useAuth from "./useAuth";

const ReffreshToken = () => {

    const { setAuth } = useAuth();

    const refreshToken = sessionStorage.getItem('data')

    const refresh = async () => {
        const response = await axios.post(`http://localhost:8800/user/verify`, 
            JSON.stringify({token: refreshToken.refreshToken}),
            {
                headers: { 'Content-Type': 'application/json'},
                AccessControlAllowredentials: true,
                withCredentials: true
            });
            setAuth(prev => {
                return { ...prev, accessToken: response.data.token }
            });
            return response.data.accessToken
    }

    return refresh;
}

export default ReffreshToken;