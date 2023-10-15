import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Home from './mycomponents/Home';
import Login from './mycomponents/Login';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Home />
        );
    }
}
