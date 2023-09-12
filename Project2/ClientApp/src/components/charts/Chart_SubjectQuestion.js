import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import utils from '../../utils.js'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function Chart_SubjectQuestion() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let data = [
            { subject: "Tyt Matematik", solvedQuestion: 80 },
            { subject: "Tyt Türkçe", solvedQuestion: 75 },
            { subject: "Tyt Fen Bilimleri", solvedQuestion: 90 },
            { subject: "Tyt Kimya", solvedQuestion: 70 },
            { subject: "Tyt Biyoloji", solvedQuestion: 85 },
            { subject: "Ayt Fizik", solvedQuestion: 78 },
            { subject: "Ayt Kimya", solvedQuestion: 92 },
            { subject: "Ayt Biyoloji", solvedQuestion: 88 },
            { subject: "Ayt Edebiyat", solvedQuestion: 65 },
            { subject: "Ayt Tarih", solvedQuestion: 72 },
        ];
        setData(data);
    }, []);

    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "Derslere Göre Toplam Soru Çözüm Dağılımı",
        exportEnabled: true,
        title: {
            text: "Derslere Göre Toplam Soru Çözüm Dağılımı",
            fontFamily: "tahoma",
            padding: 25,
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
                    label: d.subject,
                    y: d.solvedQuestion
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
