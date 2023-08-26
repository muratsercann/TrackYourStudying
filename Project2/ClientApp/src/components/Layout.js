import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SessionCardList } from './SessionCardList';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                {/*<Container tag="main">*/}
                {/*    {this.props.children}*/}
                {/*</Container>*/}

                <SessionCardList />

            </div>
        );
    }
}
