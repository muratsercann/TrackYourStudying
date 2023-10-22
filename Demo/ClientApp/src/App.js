import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Home from './mycomponents/Home';
import Login from './mycomponents/Login';
import EditSession from './mycomponents/EditSession';
import Header from './mycomponents/Header';
import Studies from './mycomponents/Studies';
import { AiFillHome } from "react-icons/ai";

export default function App() {
    const pages = [
        {
            key: 0,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Ana Sayfa',
            page: <Home />
        }, {
            key: 1,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Çalışmalarım',
            page: <Studies />
        }, {
            key: 2,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Denemelerim',
            page: <Home />
        }, {
            key: 3,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Grafikler',
            page: <Home />
        },

    ];
    const [selectedPage, setSelectedPage] = useState(pages[0]);
    return (<>
        <Header header={selectedPage.label} pages={pages} setSelectedPage={setSelectedPage} />
        {selectedPage.page}
    </>
    );

}




