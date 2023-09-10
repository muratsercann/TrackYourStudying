import React, { useState, useEffect } from 'react';
import { SessionCard } from './SessionCard';
import { SessionForm } from '../forms/SessionForm.js';
import './style.css'; 

export function SessionCardList() {

    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    let reloadlist = function () {
        setLoading(true);
        setReload(!reload);
    }


    function renderContents(data) {
        return (
            <div>
                {
                    data.map(s =>
                        <SessionCard sessionsByDate={s} key={s.date} reload={reloadlist} />
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
        populateData();
    }, [reload]);


    async function populateData() {
        const response = await fetch('studysession');//change with getSessions
        const data = await response.json();

        console.log("in SessionCardList, await fetch('studysession') -> sessions by date :  ");
        console.log(data);

        setSessions(data);
        setLoading(false);

    }

    return (
        <div>
            <h1>Study Session List</h1>
            <h2>{contents}</h2>
            <SessionForm reloadList={reloadlist} header="Yeni Çalışma" recordType="new" />
        </div>
    );
}
