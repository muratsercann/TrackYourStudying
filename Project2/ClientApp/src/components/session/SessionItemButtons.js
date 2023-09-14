import React, { useState } from 'react';
import { SessionForm } from '../forms/SessionForm';


export function SessionItemButtons({ session, reloadSessions, changeAddButtonVisibility }) {
    const [showEditModal, setShowEditModal] = useState(false);
    function onEditClick() {
        console.log("düzenlenecek session : ");
        console.log(session);
        setShowEditModal(true);
    }

    async function onDeleteClick() {
        const userConfirmed = window.confirm("Bu öğeyi silmek istediğinize emin misiniz?");
        if (!userConfirmed) {
            return;
        }

        console.log("silinecek session : ");
        console.log(session);

        const response = await fetch('studysession/deletesession/' + session.id, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert("Silme işlemi başarılı.");
            reloadSessions();
        } else {
            alert("Silme işlemi başarısız.");
        }
    }

    const cancelEdit = () => {
        setShowEditModal(false);
    };

    const closeModal = () => {
        setShowEditModal(false);
        changeAddButtonVisibility(true);
        //En baştaki button Ekleme butonu görünürlüğü değiştirilecek.
    };

    return (
        <div className="sessionItemButtons">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="d-flex justify-content-center">
                            <button type="button" onClick={onEditClick} className="btn btnEdit btn-sm mx-1"><i className="fa fa-pencil"></i></button>
                            <button type="button" onClick={onDeleteClick} className="btn btnDelete btn-sm mx-1"><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {showEditModal &&
                <SessionForm
                    session={session}
                    changeAddButtonVisibility={changeAddButtonVisibility}
                    onClose={closeModal}
                    reloadSessions={reloadSessions}
                    header="Düzenle"
                    cancelEdit={cancelEdit}
                    recordType="edit" />}
        </div>

    );

}
