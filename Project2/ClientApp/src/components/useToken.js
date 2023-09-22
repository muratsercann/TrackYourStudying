import { useState } from 'react';
//kaynak : https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
export default function useToken() {
    const getToken = () => {
       const tokenString = localStorage.getItem('token');
        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const clearToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return {
        clearToken : clearToken,
        setToken: saveToken,
        token
    }
}
