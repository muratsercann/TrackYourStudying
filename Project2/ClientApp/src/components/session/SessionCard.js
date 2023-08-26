import React, { Component } from 'react';
import { SessionHeader } from './SessionHeader';
import { SessionItem } from './SessionItem';
import { SessionTotal } from './SessionTotal';
import './style.css';

export class SessionCard extends Component {
    static displayName = SessionCard.name;

    constructor(props) {
        super(props);
        this.state = { data: this.props.sessionsByDate, loading: true };
    }

    render() {
        return (

            <div className="card">
                <SessionHeader date={this.state.data.date} />
                <div className="card-body">
                    {this.state.data.sessions.map(s => <SessionItem session={s} key={s.id} />)}
                </div>
                <SessionTotal total={this.state.data} />
                <br></br>
            </div>

        )

    }
}
