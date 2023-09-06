import React, { useState } from 'react';
import './style.css';

export function SessionItem(props) {
    const [session, setSession] = useState(props.session);

    function onHandleClick() {
        console.log("Tıklanan session bilgisi :");
        console.log(session);
    }

    return (
        <div>
            <div onClick={onHandleClick} className="lesson">
                <div>
                    <div>
                        <p>
                            <strong>
                                {session.startTime} - {session.endTime}
                            </strong>

                            <span className="duration">
                                {"  "} {session.studyDurationString} 
                            </span>
                        </p>
                    </div>
                </div>

                <p>
                    {session.subjectId} - {session.topicId} 
                    {" "}({session.didTopicStudy && "Konu + "}
                    {session.solvedQuestions} Soru)
                </p>
            </div>
        </div>
    );

}
