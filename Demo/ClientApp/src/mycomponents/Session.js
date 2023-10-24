import React, { useState } from 'react'
import '../styles/studies.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'
import { BsPencilSquare, BsTrash } from "react-icons/bs"
import DeleteDialog from './DeleteDialog'
import ToastDialog from './ToastDialog'
export default function Session({ session }) {

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

    return (<>
        <ToastDialog toast={toast} setToast={setToast} />

        <div className='session'>
            <div className='actionButtons'>
                <div className='editButton'><BsPencilSquare color='gray' size={18} /></div>
                <div onClick={handleDelete} className='deleteButton'><BsTrash color='gray' size={18} /></div>
            </div>
            <div className='pin'>
                <span>
                    {session.time}
                </span>
            </div>
            <div className='triangle'></div>
            <div className='text t1'>
                <span>{session.subject} - {session.topic}</span>
            </div>

            <div className='text t2'>
                <span>{session.topicStudied && "Konu Çalışması"}</span>
            </div>
            <div className='text t3'>
                <span>{session.topicStudied && "+"}</span>
            </div>
            <div className='text t4'>
                <span>{session.solvedQuestions} Soru {session.correct} Doğru - {session.incorrect} Yanlış </span>
            </div>
        </div>

        {showDeleteDialog && <DeleteDialog onClose={onCloseDeleteDialog} />}
    </>);
}