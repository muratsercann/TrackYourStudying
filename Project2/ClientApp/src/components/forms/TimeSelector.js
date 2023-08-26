import React, { Component } from 'react';

export class TimeSelector extends Component {
    static displayName = TimeSelector.name;

    render() {
        return (
            <div className="timeSelector">
                <div className="mb-3">
                    <label htmlFor="time1" className="form-label">Başlangıç Saati :</label>
                    <input type="time" className="form-control" id="time1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="time2" className="form-label">Bitiş Saati :</label>
                    <input type="time" className="form-control" id="time2" />
                </div>
            </div>
        );
    }
}
