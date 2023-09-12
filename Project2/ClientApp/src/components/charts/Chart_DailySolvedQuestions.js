import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_DailySolvedQuestions() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let data = [
            { date: new Date("09.1.23").toLocaleDateString(), solvedQuestions: 50 },
            { date: new Date("09.2.23").toLocaleDateString(), solvedQuestions: 100 },
            { date: new Date("09.3.23").toLocaleDateString(), solvedQuestions: 100 },
            { date: new Date("09.4.23").toLocaleDateString(), solvedQuestions: 58 },
            { date: new Date("09.5.23").toLocaleDateString(), solvedQuestions: 45 },
            { date: new Date("09.6.23").toLocaleDateString(), solvedQuestions: 120 },
            { date: new Date("09.7.23").toLocaleDateString(), solvedQuestions: 35 },
            { date: new Date("09.8.23").toLocaleDateString(), solvedQuestions: 42 },
            { date: new Date("09.9.23").toLocaleDateString(), solvedQuestions: 88 },
            { date: new Date("09.10.23").toLocaleDateString(), solvedQuestions: 65 },
            { date: new Date("09.11.23").toLocaleDateString(), solvedQuestions: 115 },
            { date: new Date("09.12.23").toLocaleDateString(), solvedQuestions: 77 },
            { date: new Date("09.13.23").toLocaleDateString(), solvedQuestions: 92 }
        ];

        setData(data);
    }, []);

    const options = {
        theme: "dark1", // "light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "Günlük Çözülen Soru",
            fontFamily: "tahoma",
            padding: 15,
        },
        axisY: {
            //title: "Çözülen Soru",
            /*suffix: "%"*/
        },
        axisX: {
            //title: "Tarih",
            //interval: 2
        },
        data: [{
            type: "line",
            dataPoints: data && data.map(d => { return { label: d.date, y: d.solvedQuestions } })
        }]
    }

    return (
        <div className="">
            <CanvasJSChart options={options}
            /* onRef = {ref => this.chart = ref} */
            />
        </div>
    )


}
