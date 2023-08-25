import React, { Component } from 'react';
import { SessionHeader } from './SessionHeader';
import { SessionItem } from './SessionItem';

export class SessionCard extends Component {
    static displayName = SessionCard.name;

    constructor(props) {
        super(props);
        this.state = { data: this.props.sessionsByDate, loading: true };
    }

    render() {
        return (

            <>
                <SessionHeader date={this.state.data.date} />
                {this.state.data.sessions.map(s => <SessionItem session={s} key={s.id} />)}
                <br></br>
            </>
        )

    }
}
