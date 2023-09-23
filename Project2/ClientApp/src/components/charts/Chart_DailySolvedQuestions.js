import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_DailySolvedQuestions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        populateChartData();
    }, []);

    async function populateChartData() {

        const response = await utils.apiRequest.chart.dailySolvedQuestion();
        if (response.ok) {
            const data = await response.json();
            console.log("Date - Question Chart Data :");
            console.log(data);
            setData(data);
        }
        else {
            console.error( "DailySolvedQuestionError", response );
        }
        
    }


    const options = {
        theme: "dark1", // "light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "Günlük Çözülen Soru",
            fontFamily: "tahoma",
            padding: 15,
        },
        axisY: {
            labelFormatter: function (e) {
                return e.value;
            }
        },
        axisX: {
            //title: "Tarih",
            //interval: 2
        },
        data: [{
            type: "line",
            dataPoints: data && data.map(d => {
                return {
                    label: new Date(d.date).toLocaleDateString(),
                    y: d.solvedQuestion
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
