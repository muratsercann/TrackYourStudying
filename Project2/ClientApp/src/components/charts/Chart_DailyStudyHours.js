import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_DailyStudyHours() {
    const [data, setData] = useState([]);
    useEffect(() => {

        let data = [
            { date: new Date("09.1.23").toLocaleDateString(), duration: 170 },
            { date: new Date("09.2.23").toLocaleDateString(), duration: 350 },
            { date: new Date("09.3.23").toLocaleDateString(), duration: 100 },
            { date: new Date("09.4.23").toLocaleDateString(), duration: 210 },
            { date: new Date("09.5.23").toLocaleDateString(), duration: 340 },
            { date: new Date("09.6.23").toLocaleDateString(), duration: 120 },
            { date: new Date("09.7.23").toLocaleDateString(), duration: 360 },
            { date: new Date("09.8.23").toLocaleDateString(), duration: 440 },
            { date: new Date("09.9.23").toLocaleDateString(), duration: 500 },
            { date: new Date("09.10.23").toLocaleDateString(), duration: 250 },
            { date: new Date("09.11.23").toLocaleDateString(), duration: 115 },
            { date: new Date("09.12.23").toLocaleDateString(), duration: 590 },
            { date: new Date("09.13.23").toLocaleDateString(), duration: 360 }
        ];

        setData(data);
    }, []);

    const options = {
        theme: "dark1", // "light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "Günlük Çalışma Süresi",
            fontFamily: "tahoma", 
            padding: 15,
        },
        axisY: {
            //title: "Çözülen Soru",
            /*suffix: "%"*/
        },
        axisX: {
            //title: "Tarih",
            //prefix: "W",
            //interval: 2
        },
        toolTip: {
            contentFormatter: function (e) {
                return utils.minutestToHours(e.entries[0].dataPoint.y);
            }
        },
        data: [{
            type: "line",
            dataPoints: data && data.map(d => { return { label: d.date, y: d.duration } })
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
