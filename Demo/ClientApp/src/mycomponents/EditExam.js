import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles/editExam.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'

import { PiTimerBold, PiTimerLight } from "react-icons/pi";
export default function EditExam() {
    const [key, setKey] = useState('TYT');

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

    return (
        <div className='editExam container'>
            <div className='content'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    {examTypes.map(examType =>
                        <Tab eventKey={examType.name} title={examType.name}>

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
                                    return (<><div className='customRow'>
                                        <div className='customCol col1'>{item.name}</div>
                                        <div className='customCol'>
                                            <input id={'correctAnswers_' + index} type='number' disabled={disabled} />
                                        </div>
                                        <div className='customCol'>
                                            <input id={'incorrectAnswers_' + index} type='number' disabled={disabled} />
                                        </div>
                                        <div className='customCol'>
                                            <input id={'net_' + index} type='number' disabled={true} />
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