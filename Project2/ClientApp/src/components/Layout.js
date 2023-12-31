import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SessionCardList } from './session/SessionCardList';
import { SessionItemButtons } from './session/SessionItemButtons';
import { SessionForm } from './forms/SessionForm';
import { Main } from './ReactPlayGround/Main'
import { DropdownTest } from './ReactPlayGround/DropdownTest'
import { Charts } from './Charts'

export function Layout({ clearToken, children }) {


    return (
        <div>
            <NavMenu clearToken={clearToken} />
            <Container tag="main">
                {children}
            </Container>
        </div>
    );
}


//export function Layout(props) {

//    return (
//        <>
//            <div id="mainContent" className="container">

//                <NavMenu />

//                {/*<Container tag="main">*/}
//                {/*    {props.children}*/}
//                {/*</Container>*/}

//                <SessionCardList />
//                {/*<SessionForm /> */}

//                {/*<DropdownTest/>*/}
//                {/*<SessionForm/>*/}
//                {/* <Main />*/}

//                {/*<Charts />*/}

//            </div>



//        </>
//    );

//}
