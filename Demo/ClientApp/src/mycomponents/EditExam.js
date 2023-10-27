import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles/editExam.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'

import { PiTimerBold, PiTimerLight } from "react-icons/pi";
export default function EditExam() {
    const [key, setKey] = useState('TYT');
    const [examResult, setExamResult] = useState([]);


    const examTypes = [
        {
            name: "TYT", subjects: [
                { name: 'Türkçe', questionCount: 40 },
                { name: 'Matematik', questionCount: 40 },
                { name: 'Fen Bilimleri', questionCount: 20 },
                { name: 'Sosyal Bilgiler', questionCount: 20 },
                { name: 'Toplam', questionCount: 120 },
            ],
        }, {

            name: "AYT", subjects: [
                { name: 'Matematik', questionCount: 30 },
                { name: 'Geometri', questionCount: 20 },
                { name: 'Fizik' },
                { name: 'Kimya' },
                { name: 'Biyoloji' },
                { name: 'Toplam', questionCount: 80 }
            ]
        }

    ];



    const handleCancel = (e) => {
        e.preventDefault();
    }

    const handleSave = (e) => {
        e.preventDefault();
    }

    // const handleCorrectAnswerChange = (event) => {
    //     const newFormData = { ...examResult, date: event.target.value };
    //     setExamResult(newFormData);
    // }
    const updateResult = (subjectName, propName, value) => {

        const calculateNet = (item) => {
            let correct = propName === 'correct' ? value : item.correct;
            let inCorrect = propName === 'inCorrect' ? value : item.inCorrect;
            if (!correct) {
                correct = 0;
            }

            if (!inCorrect) {
                inCorrect = 0;
            }

            let net = correct - (inCorrect / 4);


            console.log(subjectName, { net: net });

            return net;
        }

        const itemIndex = examResult.findIndex(item => item.subject === subjectName);
        let newData;
        if (itemIndex >= 0) {
            newData = examResult.map(item => {
                if (item.subject === subjectName) {
                    return { ...item, [propName]: value, net: calculateNet(item) }
                }
                return item;
            });
        }

        else {
            newData = [...examResult];
            let item = {
                subject: subjectName, [propName]: value
            }

            item = { ...item, net: calculateNet(item) };
            newData.push(item);
        }

        //Total Counts Calculation
        const totalCorrect = newData
            .filter(item => item.subject !== 'Total')
            .reduce((accumulator, item) => {
                if (item.correct) {
                    return accumulator + item.correct;
                }
                else {
                    return accumulator;
                }
            }, 0);

        const totalIncorrect = newData
            .filter(item => item.subject !== 'Total')
            .reduce((accumulator, item) => {
                if (item.inCorrect) {
                    return accumulator + item.inCorrect;
                }
                else {
                    return accumulator;
                }
            }, 0);

        const totalNet = newData
            .filter(item => item.subject !== 'Total')
            .reduce((accumulator, item) => {
                if (item.net) {
                    return accumulator + item.net;
                }
                else {
                    return accumulator;
                }
            }, 0);


        const totalIndex = examResult.findIndex(item => item.subject === "Total");
        if (totalIndex >= 0) {
            newData = newData.map(item => {
                if (item.subject === "Total") {
                    return {
                        ...item,
                        correct: totalCorrect,
                        inCorrect: totalIncorrect,
                        net: totalNet
                    };
                }
                return item;
            });
        }
        else {
            newData.push({
                subject: "Total", correct: totalCorrect, inCorrect: totalIncorrect, net: totalNet,
            });
        }



        setExamResult(newData);
        console.log('ExamResult', newData);
    }


    const getNetValue = (subjectName) => {
        let item = examResult.find(item => item.subject === subjectName);
        if (item && item.net) {
            return item.net;
        }
        else {
            return 0;
        }
    }

    return (
        <div className='editExam container'>
            <div className='content'>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >
                    {examTypes.map(examType =>
                        <Tab key={examType.name} eventKey={examType.name} title={examType.name}>

                            <div className='formTable'>
                                <div className='header'>
                                    <div className='customRow'>
                                        <div className='customCol col1'></div>
                                        <div className='customCol th'>D</div>
                                        <div className='customCol th'>Y</div>
                                        <div className='customCol th'>N</div>
                                    </div>
                                </div>

                                {examType.subjects.map((item, index) => {
                                    let disabled = false;
                                    if (item.name.toLowerCase() === 'toplam') {
                                        disabled = true;
                                    }

                                    let handleCorrectAnswerChange = (event) => {
                                        updateResult(item.name, 'correct', event.target.valueAsNumber);
                                    }

                                    let handleInCorrectAnswerChange = (event) => {
                                        updateResult(item.name, 'inCorrect', event.target.valueAsNumber);
                                    }

                                    return (<><div key={item.name} className='customRow'>
                                        <div className='customCol col1'>{item.name}</div>
                                        <div className='customCol'>
                                            <input id={'correctAnswers_' + index} onChange={handleCorrectAnswerChange} type='number' disabled={disabled} />
                                        </div>
                                        <div className='customCol'>
                                            <input id={'incorrectAnswers_' + index} onChange={handleInCorrectAnswerChange} type='number' disabled={disabled} />
                                        </div>
                                        <div className='customCol'>
                                            <input id={'net_' + index} type='number' value={getNetValue(item.name)} disabled={true} />
                                        </div>
                                    </div>
                                        <div className='rowSeparator' />
                                    </>
                                    );
                                }
                                )}
                            </div>

                            <div className='form-input'>
                                <label>Sınav Tarihi : </label>
                                <div><input type='date' style={{ width: '150px', padding: '5px' }}></input></div>
                            </div>

                            <div className='form-input'>
                                <label>Açıklama : </label>
                                <div><textarea type='text' style={{ width: '150px', height: '80px', padding: '5px' }}></textarea></div>
                            </div>

                            <div className='submitButtons customRow'>
                                <div className='customCol'>
                                    <button type="button" onClick={handleCancel} className="btn btn-secondary">İptal</button>
                                </div>

                                <div className='customCol sep'></div>

                                <div className='customCol'>
                                    <button type="button" onClick={handleSave} className="btn btn-primary">Kaydet</button>
                                </div>
                            </div>

                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
}