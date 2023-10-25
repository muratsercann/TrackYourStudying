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
import Spinner from 'react-bootstrap/Spinner';
import Exams from './mycomponents/Exams';
import EditExam from './mycomponents/EditExam';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [pageHeader, setPageHeader] = useState('');

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
            page: <Studies pageInfo={
                {
                    key: 1,
                    icon: <AiFillHome color='white' size={30} />,
                    label: 'Çalışmalarım',
                    changePageHeader: function (header) { setPageHeader(header) },
                }
            } />,

        }, {
            key: 2,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Denemelerim',
            page: <Exams />
        }, {
            key: 3,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Grafikler',
            page: <Home />
        }, {
            key: 4,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Yeni Kayıt',
            page: <EditSession />
        },
        {
            key: 5,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Yeni Deneme',
            page: <EditExam />
        },

    ];


    const [selectedPage, setSelectedPage] = useState(pages[5]);
    let content;
    if (loading) {
        content = <div className='spinner-container'><Spinner variant="success" /></div>;
    }

    else {
        content = selectedPage.page;
    }


    return (<>
        <Header header={pageHeader == '' ? selectedPage.label : pageHeader} pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {content}
    </>
    );

}




