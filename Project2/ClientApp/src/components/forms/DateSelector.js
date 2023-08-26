import React, { Component } from 'react';

export class DateSelector extends Component {
    static displayName = DateSelector.name;

    render() {
        return (
            <div className="dateSelector">
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Tarih :</label>
                    <input type="date" className="form-control" id="date" ></input>
                </div>
            </div>
        );
    }
}
