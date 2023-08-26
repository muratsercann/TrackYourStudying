import React, { Component } from 'react';
import { SessionHeader } from './SessionHeader';
import { SessionItem } from './SessionItem';
import './style.css';

export class SessionCard extends Component {
    static displayName = SessionCard.name;

    constructor(props) {
        super(props);
        this.state = { data: this.props.sessionsByDate, loading: true };
    }

    render() {
        return (

            <div class="card">
                <SessionHeader date={this.state.data.date} />
                <div class="card-body">
                    {this.state.data.sessions.map(s => <SessionItem session={s} key={s.id} />)}
                </div>
                <br></br>
            </div>

        )

    }
}
