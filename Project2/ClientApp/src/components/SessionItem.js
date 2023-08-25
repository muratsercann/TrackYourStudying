import React, { Component } from 'react';

export class SessionItem extends Component {
    static displayName = SessionItem.name;

    constructor(props) {
        super(props);
        this.state = { session: this.props.session, loading: true };
    }

    render() {
        return (
            <div>
                {this.state.session.subject}
                <br></br>
            </div>
        );
    }
}
