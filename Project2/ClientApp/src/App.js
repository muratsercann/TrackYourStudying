import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, redirect } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Login } from "./components/Login";
import useToken from './components/useToken';
import utils from './utils.js';

export default function App() {
    const [loading, setLoading] = useState(true);
    //TODO: msercan : localStorage'da bulunan token sunucudan kontrol edilerek geçerli mi deðil mi kontrolü yapýlacak.
    const { token, setToken, clearToken } = useToken();

    useEffect(() => {
        if (token) {
            isValidToken();   //eðer token varsa geçerli mi diye kontrol ediliyor..
        }
    }, []);

    const isValidToken = async () => {
        const response = await utils.apiRequest.user.validateAuhorization();

        if (!response.ok || response.status === 401) {//401 UnAuthorized
            console.log("clearToken");
            clearToken();
        }

        setLoading(false);
        return response.ok;
    }

    if (!token) {
        console.log("going to login");
        return <Login setToken={setToken} />
    }

    let result;

    if (loading) {
        console.log("loading..");
        result = <div className="md-5">Loading...</div>;
    }

    else {
        console.log("load layout");
        result = <Layout clearToken={clearToken}>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    }
    return <>{result}</>;

}
