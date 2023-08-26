import React, { Component } from 'react';
import './style.css';
export class SessionHeader extends Component {
    static displayName = SessionHeader.name;

    constructor(props) {
        super(props);
        this.state = { date: this.props.date, loading: true };
    }

    render() {
        return (
            <div class="card-header">
                {this.state.date}
            </div>
        );
    }
}
