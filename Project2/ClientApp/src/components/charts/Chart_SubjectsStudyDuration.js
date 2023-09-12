import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_SubjectsStudyDuration() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let data = [
            { subject: "Tyt Matematik", duration: 40 },
            { subject: "Tyt Kimya", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Tyt Fizik", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Tyt Biyoloji", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Edebiyat", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Tarih", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Coğrafya", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Kimya", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Fizik", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 },
            { subject: "Ayt Biyoloji", duration: Math.floor(Math.random() * (500 - 360 + 1)) + 360 }
        ];
        setData(data);
    }, []);

    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "Ders-Soru Çözüm Dağılımı",
        exportEnabled: true,
        title: {
            text: "Derslere Göre Toplam Çalışma Süresi Dağılımı",
            fontFamily: "tahoma",
            padding: 25,
        },
        data: [{
            type: "pie",
            startAngle: 75,
            indexLabelFormatter: function (e) {
                return e.dataPoint.label + " " + utils.minutestToHours(e.dataPoint.y);
            },
            showInLegend: false,
            legendText: "{label}",
            indexLabelPlacement: "outside",
            dataPoints: data && data.map(d => {
                return {
                    label: d.subject,
                    y: d.duration
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
