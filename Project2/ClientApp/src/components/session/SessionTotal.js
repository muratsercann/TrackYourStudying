import React, { Component } from 'react';
import utils from '../../utils.js'

export class SessionTotal extends Component {
    static displayName = SessionTotal.name;

    constructor(props) {
        super(props);
        this.state = { data: this.props.total, loading: true };
    }

    render() {
        return (
            <div className="sessionTotal">
                <span>{utils.minutestToHours(this.state.data.totalDurationMinutes)} - {this.state.data.totalSolvedQuestion} Soru</span>
            </div>
        );
    }
}
