import React from 'react'
import '../styles/editSession.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'
import { PiTimerBold, PiTimerLight } from "react-icons/pi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditSession({ close }) {

    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır

    const subjects = [
        { id: 1, value: "Matematik" },
        { id: 2, value: "Türkçe" },
        { id: 3, value: "Fizik" },
        { id: 4, value: "Kimya" },
        { id: 5, value: "Biyoloji" },
        { id: 6, value: "Tarih" },
    ];

    const topics = [{ id: 1, value: "Topic1" }, { id: 2, value: "Topic2" }, { id: 3, value: "Topic3" }];

    const handleSave = (e) => {
        e.preventDefault();
        close();
    }

    const handleCancel = (e) => {
        e.preventDefault();
        close();
    }


    return (
        <div className="editSession">
            <div className="container">
                {/*TARİH VE SAATLER*/}
                <div className='inputs-header'>
                    Tarih ve Saat
                </div>

                <div className="separator">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>

                {/* Tarih */}
                <div className="input-label form-label" htmlFor="date" >Tarih : </div>
                <div className="input"> <input type='date' className='form-control' id='date' ></input> </div>


                {/* Başlangıç ve Bitiş Saatleri*/}
                <div className='time'>
                    <div className='customRow'>
                        <div className='customCol'>
                            <div className="input-label form-label" htmlFor="time1" >Başlangıç Saati : </div>
                            <div className="input">
                                <input type='time' className='form-control' id='time1'  ></input>

                            </div>

                        </div>

                        <div className='customCol sep'>
                        </div>

                        <div className='customCol'>
                            <div className="input-label form-label" htmlFor="time2" >Bitiş Saati : </div>
                            <div className="input"> <input type='time' className='form-control' id='time2' ></input> </div>
                        </div>
                    </div>
                </div>

                {/* DERS VE KONU */}
                <div className='inputs-header'>
                    Ders ve Konu
                </div>

                <div className="separator">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>


                {/* Ders */}
                <div className="input-label form-label" htmlFor="subject" >Ders : </div>
                <div className="input">
                    <select className="form-select" id="subject">
                        {subjects.map(item =>
                            <option key={item.id} value={item.value}>{item.value}</option>
                        )}
                    </select>
                </div>
                {/* Konu*/}
                <div className="input-label form-label" htmlFor="topic" >Konu : </div>
                <div className="input">
                    <select className="form-select" id="topic">
                        {topics.map(item =>
                            <option key={item.id} value={item.value}>{item.value}</option>
                        )}
                    </select>
                </div>

                {/* Check Konu Çalışması */}
                <div className="input-label form-label"></div>
                <div className="mb-3 topicReviewCheckbox">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="topicStudy"
                        />
                        <label className="form-check-label" htmlFor="topicStudy">
                            Konu Çalışması
                        </label>
                    </div>
                </div>


                {/* Soru Çözüm */}
                <div className='inputs-header'>
                    Soru Çözüm
                </div>

                <div className="separator">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>

                <div className='customRow'>
                    <div className='customCol'>
                        <div className="input-label form-label" htmlFor="soru" >Soru :</div>
                        <div className="input">
                            <input type='number' className='form-control' id='soru'  ></input>

                        </div>

                    </div>

                    <div className='customCol sep'></div>

                    <div className='customCol'>
                        <div className="input-label form-label" htmlFor="dogru" >Doğru : </div>
                        <div className="input"> <input type='number' className='form-control' id='timdogru2' ></input> </div>
                    </div>


                    <div className='customCol sep'></div>

                    <div className='customCol'>
                        <div className="input-label form-label" htmlFor="yanlis" >Yanlış : </div>
                        <div className="input"> <input type='number' className='form-control' id='yanlis' ></input> </div>
                    </div>


                    <div className='customCol sep'></div>

                    <div className='customCol'>
                        <div className="input-label form-label" htmlFor="net" >Net : </div>
                        <div className="input"> <input type='time' className='form-control' id='net' ></input> </div>
                    </div>
                </div>

                {/* Submit Buttons */}

                <div className='submitButtons customRow'>
                    <div className='customCol'>
                        <button type="button" onClick={handleCancel} className="btn btn-secondary">İptal</button>
                    </div>

                    <div className='customCol sep'></div>

                    <div className='customCol'>
                        <button type="button" onClick={handleSave} className="btn btn-primary">Kaydet</button>
                    </div>
                </div>

            </div>

        </div>
    );
}