import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SessionCardList } from './session/SessionCardList';
import { SessionForm } from './forms/SessionForm';
import { Main } from './ReactPlayGround/Main'
import './session/style.css'

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                <div id="mainContent" className="container">

                    <NavMenu />
                    {/*<Container tag="main">*/}
                    {/*    {this.props.children}*/}
                    {/*</Container>*/}

                    {/*<SessionCardList />*/}

                    <SessionForm/>

                 {/*   <Main />*/}

                </div>

                <a href="#" className="floating-button" data-bs-toggle="modal" data-bs-target="#exampleModal">+</a>

            </>
        );
    }
}
