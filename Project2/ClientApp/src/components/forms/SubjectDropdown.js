import React, { Component } from 'react';

export class SubjectDropdown extends Component {
    static displayName = SubjectDropdown.name;

    render() {
        return (
            <div className="subjectDropdown">
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Konu:</label>
                    <select className="form-select" id="subject">
                        <option value="math">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="history">History</option>
                    </select>
                </div>
            </div>
        );
    }
}
