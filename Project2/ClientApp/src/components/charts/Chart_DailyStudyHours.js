﻿import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_DailyStudyHours() {
    const [data, setData] = useState([]);

    useEffect(() => {
        populateChartData();
    }, []);

    async function populateChartData() {

        const response = await utils.apiRequest.chart.dailyStudyDuration();
        if (response.ok) {
            const data = await response.json();
            console.log("Date - Duration Chart Data :");
            console.log(data);
            setData(data);
        }

        else {
            console.error( "DailyStudyDurationError", response );
        }
        
    }

    const options = {
        theme: "dark1", // "light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "Günlük Çalışma Süresi",
            fontFamily: "tahoma",
            padding: 15,
        },
        axisY: {
            labelFormatter: function (e) {
                if (utils.isInt(e.value)) {
                    return utils.convertMinutesToTimeFormat(e.value);
                }
                else {
                    return "";
                }
            }
        },
        axisX: {
            //title: "Tarih",
            //prefix: "W",
            //interval: 2
        },
        toolTip: {
            contentFormatter: function (e) {
                return utils.minutesToHours(e.entries[0].dataPoint.y);
            }
        },
        data: [{
            type: "line",
            dataPoints: data && data.map(d => {
                return {
                    label: new Date(d.date).toLocaleDateString(),
                    y: d.studyDurationMinutes
                }
            })
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
