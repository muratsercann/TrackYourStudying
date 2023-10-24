import React, { useState } from 'react'
import '../styles/exams.css'
import { BsPencilSquare, BsTrash } from "react-icons/bs"

import EditExam from './EditExam';
import DeleteDialog from './DeleteDialog';
import ToastDialog from './ToastDialog';

export default function Exam({ examResult }) {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: 'Message',
        type: 'success',
    });


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

    const createTable = () => {

    }

    return (<>
        {toast.show && <ToastDialog toast={toast} setToast={setToast} />}
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
                    <div className="col col1 th"></div>
                    <div className="col th">Doğru</div>
                    <div className="col th">Yanlış</div>
                    <div className="col th">Net</div>
                </div>
                {examResult.map((item, index) => {
                    let cls = 'row';
                    if (item.subject == 'Toplam') {
                        cls = 'rowTotal';
                    }
                    else {
                        cls += ((index % 2) + 1);
                    }

                    return (
                        <div key={item.subject + index} className={"row " + cls}>
                            <div className="col col1">{item.subject}</div>
                            <div className="col">{item.result.correct}</div>
                            <div className="col">{item.result.inCorrect}</div>
                            <div className="col">{item.result.net}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        {showDeleteDialog && <DeleteDialog onClose={onCloseDeleteDialog} />}

    </>);
}