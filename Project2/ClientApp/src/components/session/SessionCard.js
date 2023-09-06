import React, { Component, useState } from 'react';
import { SessionHeader } from './SessionHeader';
import { SessionItem } from './SessionItem';
import { SessionTotal } from './SessionTotal';
import './style.css';

export function SessionCard({ sessionsByDate }) {
    const [data, setData] = useState(sessionsByDate);
    const [loading, setLoading] = useState(true);


    return (

        <div className="card">
            <SessionHeader date={data.date} />
            <div className="card-body">
                {
                    data.sessions.map(s =>
                    <SessionItem session={s} key={s.id} />
                )}
            </div>
            <SessionTotal total={data} />
            <br></br>
        </div>

    )


}
