import React from 'react'
import '../styles/studies.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'
import { PiTimerBold, PiTimerLight } from "react-icons/pi"

export default function Session({ session }) {

    return (
        <div className='session'>
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
    );
}