import React, { Component } from 'react';
import './style.css';

export class SessionItem extends Component {
    static displayName = SessionItem.name;

    constructor(props) {
        super(props);
        this.state = { session: this.props.session, loading: true };
    }

    render() {
        return (
            <div>
                <div class="lesson">
                    {/*<p><strong></strong></p>*/}
                    <div>
                        <div>
                            <p>
                                <strong>
                                    {this.state.session.startTime} - {this.state.session.endTime} 
                                </strong>

                                <span>{" "} ({this.state.session.studyDuration} dk)</span> 
                            </p>
                        </div>
                    </div>

                    <p>{this.state.session.subject} - {this.state.session.topic}</p>
                </div>
            </div>
        );
    }
}
