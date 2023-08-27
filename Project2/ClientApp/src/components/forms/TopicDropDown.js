import React, { Component } from 'react';

export class TopicDropdown extends Component {
    static displayName = TopicDropdown.name;

    constructor(props) {
        super(props);
        this.state = { selectedSubject: this.props.selectedSubject };
    }

    render() {
        console.log("safasg");
        return (
            <div className="topicDropdown">
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Konu :</label>
                    <select className="form-select" id="subject">

                    </select>
                </div>
            </div>
        );
    }
}
