import React, { Component } from 'react';
import './style.css';

export class SessionTotal extends Component {
    static displayName = SessionTotal.name;

    constructor(props) {
        super(props);
        this.state = { data: this.props.total, loading: true };
    }

    render() {
        return (
            <div className="sessionTotal">
                <span>{this.state.data.totalDuration} - {this.state.data.totalSolvedQuestion}</span>
            </div>
        );
    }
}
