
import React, { useState, useEffect } from 'react';
import { SessionCard } from './SessionCard';
import { SessionForm } from '../forms/SessionForm.js';
import './style.css';
export function SessionCardList() {

    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    function renderContents(data) {
        return (
            <div>
                {
                    data.map(s =>
                        <SessionCard sessionsByDate={s} key={s.date} />
                    )
                }


            </div>
        );
    }


    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderContents(sessions);

    let reloadlist = function (data) {
        setLoading(true);
        setReload(!reload);
    }

    useEffect(() => {
        populateData();
    }, [reload]);


    async function populateData() {
        const response = await fetch('studysession');//change with getSessions
        const data = await response.json();
        console.log(data);
        setSessions(data);
        setLoading(false);

    }

    return (

        <div>
            {console.log("in SessionCardList return function \n constents : \n" + contents)}
            <h1>Study Session List</h1>
            <h2>{contents}</h2>
            <SessionForm reloadList={ reloadlist } />
        </div>
    );
}
