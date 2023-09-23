import React, { useState, useEffect } from 'react';
import { SessionCard } from './SessionCard';
import { SessionForm } from '../forms/SessionForm.js';
import  utils  from '../../utils.js'

export function SessionCardList() {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isReload, setIsReload] = useState(false);
    const [addButtonVisibility, setAddButtonVisibility] = useState(true);
    const [isSessionFormOpen, setIsSessionFormOpen] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);

    let reloadSessions = function () {
        setLoading(true);
        setIsReload(!isReload);/*Burda true geçilip*/
    }

    function changeAddButtonVisibility(visible) {
        setAddButtonVisibility(visible);
    }


    function renderContents(data) {
        const mystyle = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "16px",
        };

        if (!data || data.length === 0) {
            return (
                <div style={mystyle}>
                    Gösterilecek kayıt bulunamadı..
                </div>)
        }
        return (
            <div>
                {
                    data.map(s =>
                        <SessionCard sessionsByDate={s}
                            key={s.date}
                            reloadSessions={reloadSessions}
                            changeAddButtonVisibility={changeAddButtonVisibility}
                        />
                    )
                }


            </div>
        );
    }

    let contents = loading
        ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        : renderContents(sessions);


    useEffect(() => {
        //burda if(isReload) { populateSessions }şeklinde yapılabilir. 
        if (localStorage.getItem('token') !== null) {
            setIsAuthorized(true);
            populateSessions();
        }
        else {

        }
               
    }, [isReload]);


    async function populateSessions() {
        var response = await utils.apiRequest.session.sessions();
        if (response.ok) {

            const data = await response.json();

            console.log("in SessionCardList, await fetch('studysession') -> sessions by date :  ");
            console.log(data);

            setSessions(data);
            setLoading(false);
        }

        else {
            console.error( 'popuplateSessions error! response' , response );
        }
    }

    const openSessionForm = (e) => {
        e.preventDefault();
        setIsSessionFormOpen(true);
    };

    const AddNewSessionButton = () => {
        return <>
            <a href="" className="floating-button" onClick={openSessionForm}>+</a>
        </>
    };

    const closeSessionForm = () => {
        setIsSessionFormOpen(false);
        setAddButtonVisibility(true);
    };

    return (
        <div>
            <h1>Günlük Çalışmalar</h1>
            <h2>{contents}</h2>

            {(addButtonVisibility && !isSessionFormOpen) && <AddNewSessionButton />}
            {isSessionFormOpen && < SessionForm
                reloadSessions={reloadSessions}
                changeAddButtonVisibility={changeAddButtonVisibility}
                onClose={closeSessionForm}
                header="Yeni Çalışma"
                recordType="new" />}
        </div>
    );
}
