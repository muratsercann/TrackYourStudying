import React, { useState } from 'react';
import { SessionItemButtons } from './SessionItemButtons';
import utils from '../../utils.js'

export function SessionItem({ session, reloadSessions, changeAddButtonVisibility }) {

    function onHandleClick() {
        console.log("Tıklanan session bilgisi :");
        console.log(session);
    }
    function SubjectAndTopic() {
        let dersAdi = "------";
        let konuAdi = "------";
        if (session?.topic?.subject) {
            dersAdi = session.topic.subject.name;
        }

        if (session?.topic) {
            konuAdi = session.topic.name;
        }
        return (
            <p>
                {/*{console.log("session --> : ")}*/}
                {/*{console.log(session)}*/}
                {
                    dersAdi
                }
                -
                {
                    konuAdi
                }
                {" "}({session.didTopicStudy && "Konu + "}
                {session.solvedQuestions} Soru)
            </p>
        );
    }
    return (
        <div>
            <div onClick={onHandleClick} className="lesson">
                <SessionItemButtons session={session} reloadSessions={reloadSessions} changeAddButtonVisibility={changeAddButtonVisibility} />
                <div>
                    <div>
                        <p>
                            <strong>
                                {session.startTime} - {session.endTime}
                            </strong>

                            <span className="duration">
                                {"  "} {utils.minutestToHours(session.studyDurationMinutes)}
                            </span>
                        </p>
                    </div>
                </div>
                <SubjectAndTopic />

            </div>
        </div>
    );

}
