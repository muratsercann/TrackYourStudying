import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SessionCardList } from './SessionCardList';
import './style.css'

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                <div id="mainContent" class="container">

                    <NavMenu />
                    {/*<Container tag="main">*/}
                    {/*    {this.props.children}*/}
                    {/*</Container>*/}

                    <SessionCardList />

                </div>

                <a href="#" class="floating-button" data-bs-toggle="modal" data-bs-target="#exampleModal">+</a>

            </>
        );
    }
}
