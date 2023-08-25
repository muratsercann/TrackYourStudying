import React, { Component } from 'react';

export class SessionHeader extends Component {
    static displayName = SessionHeader.name;

    constructor(props) {
        super(props);
        this.state = { date: this.props.date, loading: true };
    }

    render() {
        return (
            <div>
                {this.state.date}
            </div>
        );
    }
}
