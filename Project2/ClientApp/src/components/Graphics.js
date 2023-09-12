import React, { useState, useEffect } from 'react';


import { Chart_DailySolvedQuestions } from './charts/Chart_DailySolvedQuestions';
import { Chart_DailyStudyHours } from './charts/Chart_DailyStudyHours';
import { Chart_SubjectsStudyDuration } from './charts/Chart_SubjectsStudyDuration';
import { Chart_SubjectQuestion } from './charts/Chart_SubjectQuestion';
import utils from '../utils.js'
export function Graphics() {
    //const [subjects, setSubjects] = useState([]);
    return (
        <div className="charts">
            <Chart_DailySolvedQuestions />
            <br></br>
            <br></br>
            <Chart_DailyStudyHours />
            <br></br>
            <br></br>
            <Chart_SubjectsStudyDuration />
            <br></br>
            <br></br>
            <Chart_SubjectQuestion />
        </div>
    );

}
