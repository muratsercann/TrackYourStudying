import React, { Component } from 'react';
import { SessionCard } from './SessionCard';
import './style.css';
export class SessionCardList extends Component {
    static displayName = SessionCardList.name;

    constructor(props) {
        super(props);
        this.state = { sessions: [], loading: true };
    }
    componentDidMount() {
        this.populateData();

    }

    static renderContents(data) {
        return (
            <div>
                {
                    data.map(s =>
                        <SessionCard sessionsByDate={s} key={s.date} />
                    )
                }
            </div>
        );
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : SessionCardList.renderContents(this.state.sessions);

        return (
            <div>
                <h1>Study Session List</h1>
                <h2>{contents}</h2>

            </div>
        );
    }

    async populateData() {
        const response = await fetch('studysession');//change with getSessions
        const data = await response.json();
        console.log(data);
        this.setState({ sessions: data, loading: false });

    }
}
