import React, { useState } from 'react'
import '../styles/exams.css'
import { BsPencilSquare, BsTrash } from "react-icons/bs"

import EditExam from './EditExam';
import DeleteDialog from './DeleteDialog';
import ToastDialog from './ToastDialog';

export default function Exams() {
    const [buttonVisibility, setButtonVisibility] = useState(true);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: 'Message',
        type: 'success',
    });


    const handleNewClick = (e) => {
        e.preventDefault();
        setButtonVisibility(false);
    }

    const data = [
        {
            results: [
                { subject: 'Türkçe', result: { Doğru: 20, Yanlış: 5, Net: 18.75 } },
                { subject: 'Matematik', result: { Doğru: 18, Yanlış: 3, Net: 17.25 } },
                { subject: 'Fen Bilimleri', result: { Doğru: 22, Yanlış: 7, Net: 20.25 } },
                { subject: 'Sosyal Bilgiler', result: { Doğru: 16, Yanlış: 4, Net: 15 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { Doğru: 19, Yanlış: 6, Net: 17.75 } },
                { subject: 'Matematik', result: { Doğru: 17, Yanlış: 4, Net: 15.75 } },
                { subject: 'Fen Bilimleri', result: { Doğru: 20, Yanlış: 6, Net: 18.5 } },
                { subject: 'Sosyal Bilgiler', result: { Doğru: 18, Yanlış: 5, Net: 16.25 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { Doğru: 23, Yanlış: 8, Net: 21 } },
                { subject: 'Matematik', result: { Doğru: 21, Yanlış: 5, Net: 19.75 } },
                { subject: 'Fen Bilimleri', result: { Doğru: 25, Yanlış: 7, Net: 22.25 } },
                { subject: 'Sosyal Bilgiler', result: { Doğru: 19, Yanlış: 4, Net: 18 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { Doğru: 18, Yanlış: 4, Net: 16.5 } },
                { subject: 'Matematik', result: { Doğru: 20, Yanlış: 6, Net: 18 } },
                { subject: 'Fen Bilimleri', result: { Doğru: 19, Yanlış: 5, Net: 17.25 } },
                { subject: 'Sosyal Bilgiler', result: { Doğru: 24, Yanlış: 7, Net: 22.25 } },
            ],
        },
        {
            results: [
                { subject: 'Türkçe', result: { Doğru: 22, Yanlış: 5, Net: 20.75 } },
                { subject: 'Matematik', result: { Doğru: 23, Yanlış: 6, Net: 21.75 } },
                { subject: 'Fen Bilimleri', result: { Doğru: 20, Yanlış: 4, Net: 19 } },
                { subject: 'Sosyal Bilgiler', result: { Doğru: 16, Yanlış: 3, Net: 15.25 } },
            ],
        }
    ];


    const handleDelete = () => {
        // show modal
        setShowDeleteDialog(true);
    }

    const onCloseDeleteDialog = (p) => {
        setShowDeleteDialog(false);
        if (p == "delete") {
            //delete işlemleri burada...
            // ..

            //silme işlemi başarılı olduğunda
            setToast({
                show: true,
                message: 'Silme işlemi başarılı.',
                type: 'success',
            });

            //silme işlemi başarısız olduğunda
            // setToastMessageType('danger');
            //setToastMessage("Silme işlemi başarısız");

            //Her Durumda
            // setShowSuccessToast(true);
        }
        else {
            //
        }
    }
    return (<>
        <ToastDialog toast={toast} setToast={setToast} />

        {buttonVisibility && <div className="exams container">
            <div className='examItem'>
                <div className='actionButtons'>
                    <div className='editButton'><BsPencilSquare color='gray' size={21} /></div>
                    <div onClick={handleDelete} className='deleteButton'><BsTrash color='gray' size={21} /></div>
                </div>
                <div className='header-container'>
                    <div className='header'>12.12.2013 - TYT </div>
                </div>

                <div className='content'>
                    <div className="row row0">
                        <div className="col th">Ders</div>
                        <div className="col th">Doğru</div>
                        <div className="col th">Yanlış</div>
                        <div className="col th">Net</div>
                    </div>
                    <div className="row row1">
                        <div className="col">Türkçe</div>
                        <div className="col">35</div>
                        <div className="col">4</div>
                        <div className="col">34</div>
                    </div>
                    <div className="row row2">
                        <div className="col">Matematik</div>
                        <div className="col">35</div>
                        <div className="col">4</div>
                        <div className="col">34</div>
                    </div>
                    <div className="row row3">
                        <div className="col">Fen</div>
                        <div className="col">15</div>
                        <div className="col">4</div>
                        <div className="col">14</div>
                    </div>
                    <div className="row row4">
                        <div className="col">Sosyal</div>
                        <div className="col">10</div>
                        <div className="col">5</div>
                        <div className="col">8,75</div>
                    </div>
                    <div className="row rowTotal">
                        <div className="col">Toplam</div>
                        <div className="col">10</div>
                        <div className="col">5</div>
                        <div className="col">80</div>
                    </div>
                </div>
            </div>
        </div>}

        {!buttonVisibility && <EditExam />}

        {buttonVisibility && <button onClick={handleNewClick} className="rounded-button" id="fixed-button">+</button>}

        {showDeleteDialog && <DeleteDialog onClose={onCloseDeleteDialog} />}

    </>);
}