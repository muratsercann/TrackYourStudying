import React, { Component } from 'react';

export class SubjectDropdown extends Component {
    static displayName = SubjectDropdown.name;

    constructor(props) {
        super(props);
        this.state = { subjects: this.props.subjects, loading: true };
    }

    render() {
        return (
            <div className="subjectDropdown">
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Konu:</label>
                    <select className="form-select" id="subject">
                        {this.state.subjects.map(
                            s =>
                                <option key={s.id} value={s.name}>{s.name}</option>)
                        }
                    </select>
                </div>
            </div>
        );
    }
}
