﻿import React, { useState } from 'react';
import './style.css';

export function SessionItem(props) {
    const [session, setSession] = useState(props.session);

    function onHandleClick() {
        //alert("tıklandıı");
        console.log("Tıklanan session bilgisi :");
        console.log(session);
    }

    return (
        <div>
            <div onClick={onHandleClick} className="lesson">
                {/*<p><strong></strong></p>*/}
                <div>
                    <div>
                        <p>
                            <strong>
                                {session.startTime} - {session.endTime}
                            </strong>

                            <span className="duration">
                                {" "}({!session.didTopicStudy && "Konu + "}
                                {session.studyDuration} dk)
                            </span>
                        </p>
                    </div>
                </div>

                <p>{session.subject} - {session.topic}</p>
            </div>
        </div>
    );

}
