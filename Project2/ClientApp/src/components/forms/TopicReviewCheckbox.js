import React, { Component } from 'react';

export class TopicReviewCheckbox extends Component {
    static displayName = TopicReviewCheckbox.name;

    render() {
        return (
            <div className="mb-3 topicReviewCheckbox">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="topicStudy" />
                    <label className="form-check-label" htmlFor="topicStudy">Konu Çalışması</label>

                </div>
            </div>
        );
    }
}
