import React, { Component } from 'react';
import './style.css';
export class SessionHeader extends Component {
    static displayName = SessionHeader.name;

    formatDateToCustomString(date) {
        var a = date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', weekday: 'long' })
        return a;
    }

    constructor(props) {
        super(props);
        this.state = { date: this.props.date, loading: true };
    }



    render() {
        var dateString = this.formatDateToCustomString(new Date(this.state.date))
        return (
            <div className="card-header">
                {dateString}
            </div>
        );
    }
}

