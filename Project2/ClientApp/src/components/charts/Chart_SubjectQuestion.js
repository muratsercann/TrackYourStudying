import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_SubjectQuestion() {
    const [data, setData] = useState([]);

    useEffect(() => {
        populateChartData();
    }, []);

    async function populateChartData() {

        const response = await fetch('studysession/getSubjectSolvedQuestionsStatistic'); // API URL'i burada olmalı
        const data = await response.json();
        console.log("Subject - Question Chart Data :");
        console.log(data);
        setData(data);
    }

    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "Ders - Soru Çözüm Dağılımı",
        exportEnabled: true,
        title: {
            text: "Ders - Soru Çözüm Dağılımı",
            fontFamily: "tahoma",
            padding: 25,
        },
        toolTip: {
            enabled: true,
            fontSize: 14,
            contentFormatter: function (e) {
                var content = e.entries[0].dataPoint.label;
                content += " (" + e.entries[0].dataPoint.y + " Soru)"
                console.log(e)
                return content;
            }
        },
        data: [{
            type: "pie",
            startAngle: 75,
            indexLabelFormatter: function (e) {
                return e.dataPoint.label + " " + e.dataPoint.y;
            },
            showInLegend: false,
            legendText: "{label}",
            indexLabelPlacement: "outside",
            dataPoints: data && data.map(d => {
                return {
                    label: d.subjectName,
                    y: d.solvedQuestions
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
