import React, { Component } from 'react';

export class TopicDropdown extends Component {
    static displayName = TopicDropdown.name;

    render() {
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
