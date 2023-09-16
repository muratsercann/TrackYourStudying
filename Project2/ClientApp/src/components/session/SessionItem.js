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
        return (<>
            <div className="row">
                <div className="col">{dersAdi} - {konuAdi}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {" "}{session.didTopicStudy && "Konu + "}
                    {session.solvedQuestions} Soru {
                        (() => {
                            let result = "";
                            if (session.correct && session.correct > 0) {
                                result += "- " + session.correct + "D ";

                                if (session.inCorrect !== undefined) {
                                    result += session.inCorrect + "Y ";
                                }

                                if (session.unAnswered !== undefined) {
                                    result += session.unAnswered + "B ";
                                }
                            }
                            return result;
                        })()
                    }

                </div>

            </div>

        </>
        );
    }
    return (
        <div>
            <div onClick={onHandleClick} className="lesson">
                <SessionItemButtons session={session} reloadSessions={reloadSessions} changeAddButtonVisibility={changeAddButtonVisibility} />
                <div>
                    <div className="row">
                        <div className="col">
                            <strong>
                                {session.startTime} - {session.endTime}
                            </strong>
                            <span className="duration">
                                {"  "} {utils.minutesToHours(session.studyDurationMinutes)}
                            </span>
                        </div>
                    </div>
                    <SubjectAndTopic />
                    <div>
                    </div>
                </div>

            </div>
        </div>
    );

}
