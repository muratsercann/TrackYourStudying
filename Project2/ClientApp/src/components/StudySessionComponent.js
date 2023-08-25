import React, { Component } from 'react';

export class StudySessionComponent extends Component {
    static displayName = StudySessionComponent.name;

    constructor(props) {
        super(props);
        this.state = { sessions: [], loading: true };
    }
    componentDidMount() {
        this.populateData();

    }

    static renderContents(sessions) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(s =>
                        <tr key={s.date}>
                            <td>{s.date}</td>
                            <td>{s.temperatureC}</td>
                            <td>{s.temperatureF}</td>
                            <td>{s.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : StudySessionComponent.renderContents(this.state.sessions);

        return (
            <div>
                <h1>Study Sessions</h1>
                <h2>{contents}</h2>

            </div>
        );
    }

    async populateData() {
        alert("populateData()");
        const response = await fetch('weatherforecast');//change with getSessions
        const data = await response.json();
        console.log(data);
        this.setState({ sessions: data, loading: false });

    }
}
