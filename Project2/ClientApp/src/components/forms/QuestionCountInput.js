import React, { Component } from 'react';

export class QuestionCountInput extends Component {
    static displayName = QuestionCountInput.name;

    render() {
        return (
            <div className="mb-3 questionCountInput">
                <label htmlFor="date" className="form-label">Soru Sayısı :</label>
                <input type="number" className="form-control" id="questionCount" />
            </div>
        );
    }
}
