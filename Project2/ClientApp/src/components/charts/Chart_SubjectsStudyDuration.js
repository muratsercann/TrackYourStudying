﻿import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_SubjectsStudyDuration() {
    const [data, setData] = useState([]);

    useEffect(() => {
        populateChartData();
    }, []);

    async function populateChartData() {

        const response = await utils.apiRequest.chart.subjectStudyDuration();

        if (response.ok) {
            const data = await response.json();
            console.log("Subject - Duration Chart Data :");
            console.log(data);
            setData(data);
        }

        else {
            console.error("SubjectStudyDurationError", response);
        }
    }


    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "Ders-Çalışma Süresi Dağılımı",
        exportEnabled: true,
        title: {
            text: "Ders-Çalışma Süresi Dağılımı",
            fontFamily: "tahoma",
            padding: 25,
        },
        toolTip: {
            enabled: true,
            fontSize: 14,
            contentFormatter: function (e) {
                var content = e.entries[0].dataPoint.label;
                content += " (" + utils.minutesToHours(e.entries[0].dataPoint.y) + ")"
                console.log(e)
                return content;
            }
        },
        data: [{
            type: "pie",
            startAngle: 75,
            indexLabelFormatter: function (e) {
                return e.dataPoint.label + " " + utils.minutesToHours(e.dataPoint.y);
            },
            showInLegend: false,
            legendText: "{label}",
            indexLabelPlacement: "outside",
            dataPoints: data && data.map(d => {
                return {
                    label: d.subjectName,
                    y: d.studyDurationMinutes
                }
            }),


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
