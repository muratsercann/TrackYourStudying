import React, { useState } from 'react';
import { Route, Routes, Navigate, redirect } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Login } from "./components/Login";
import useToken from './components/useToken';
export default function App() {
    //TODO: msercan : localStorage'da bulunan token sunucudan kontrol edilerek geçerli mi deðil mi kontrolü yapýlacak.
    const { token, setToken , clearToken} = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <Layout clearToken={clearToken}>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );

}
