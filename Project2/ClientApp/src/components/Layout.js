import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SessionCardList } from './session/SessionCardList';
import { SessionForm } from './forms/SessionForm';
import { Main } from './ReactPlayGround/Main'
import { DropdownTest } from './ReactPlayGround/DropdownTest'
import './session/style.css'

export function Layout(props) {

    return (
        <>
            <div id="mainContent" className="container">

                <NavMenu />

                {/*<Container tag="main">*/}
                {/*    {props.children}*/}
                {/*</Container>*/}

                <SessionCardList />
                {/*<SessionForm /> */}

                {/*<DropdownTest/>*/}
                {/*<SessionForm/>*/}
                {/* <Main />*/}

            </div>

            

        </>
    );

}
