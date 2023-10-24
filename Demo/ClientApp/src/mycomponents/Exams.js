import React, { useState } from 'react'
import '../styles/exams.css'
import { BsPencilSquare, BsTrash } from "react-icons/bs"

import EditExam from './EditExam';
import DeleteDialog from './DeleteDialog';
import ToastDialog from './ToastDialog';
import Exam from './Exam';

export default function Exams() {
    const [buttonVisibility, setButtonVisibility] = useState(true);

    const handleNewClick = (e) => {
        e.preventDefault();
        setButtonVisibility(false);
    }


    const data = [
        {
            results: [
                { subject: 'Türkçe', result: { correct: 20, inCorrect: 5, net: 18.75 } },
                { subject: 'Matematik', result: { correct: 18, inCorrect: 3, net: 17.25 } },
                { subject: 'Fen Bilimleri', result: { correct: 22, inCorrect: 7, net: 20.25 } },
                { subject: 'Sosyal Bilgiler', result: { correct: 16, inCorrect: 4, net: 15 } },
                { subject: 'Toplam', result: { correct: 76, inCorrect: 19, net: 71.25 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { correct: 21, inCorrect: 6, net: 19.5 } },
                { subject: 'Matematik', result: { correct: 19, inCorrect: 4, net: 17.75 } },
                { subject: 'Fen Bilimleri', result: { correct: 23, inCorrect: 8, net: 21 } },
                { subject: 'Sosyal Bilgiler', result: { correct: 17, inCorrect: 5, net: 15.75 } },
                { subject: 'Toplam', result: { correct: 80, inCorrect: 23, net: 73 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { correct: 19, inCorrect: 4, net: 17.75 } },
                { subject: 'Matematik', result: { correct: 17, inCorrect: 3, net: 16.25 } },
                { subject: 'Fen Bilimleri', result: { correct: 24, inCorrect: 6, net: 21 } },
                { subject: 'Sosyal Bilgiler', result: { correct: 20, inCorrect: 5, net: 18.75 } },
                { subject: 'Toplam', result: { correct: 80, inCorrect: 18, net: 73.75 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { correct: 22, inCorrect: 5, net: 20.75 } },
                { subject: 'Matematik', result: { correct: 20, inCorrect: 4, net: 18.5 } },
                { subject: 'Fen Bilimleri', result: { correct: 25, inCorrect: 7, net: 22.25 } },
                { subject: 'Sosyal Bilgiler', result: { correct: 19, inCorrect: 5, net: 17.75 } },
                { subject: 'Toplam', result: { correct: 86, inCorrect: 21, net: 79.25 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { correct: 20, inCorrect: 6, net: 18 } },
                { subject: 'Matematik', result: { correct: 21, inCorrect: 4, net: 19.25 } },
                { subject: 'Fen Bilimleri', result: { correct: 18, inCorrect: 5, net: 16.25 } },
                { subject: 'Sosyal Bilgiler', result: { correct: 22, inCorrect: 6, net: 19.5 } },
                { subject: 'Toplam', result: { correct: 81, inCorrect: 21, net: 73 } },
            ],
        },
    ];


    return (<>
        {buttonVisibility && <div className="exams container">
            {data.map((item, index) =>
                <Exam key={index} examResult={item.results} />
            )}
        </div>}

        {!buttonVisibility && <EditExam />}

        {buttonVisibility && <button onClick={handleNewClick} className="rounded-button" id="fixed-button">+</button>}
    </>);
}