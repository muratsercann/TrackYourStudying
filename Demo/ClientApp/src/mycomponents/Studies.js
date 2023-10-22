import React from 'react'
import '../styles/studies.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'
import { PiTimerBold, PiTimerLight } from "react-icons/pi"
import Session from './Session'

export default function Studies() {

    const data = [
        {
            date: '11.12.2023',
            sessions: [
                {
                    time: '15:45 - 17:30',
                    subject: 'Kimya',
                    topic: 'Madde ve Özellikleri',
                    topicStudied: true,
                    solvedQuestions: 45,
                    correct: 25,
                    incorrect: 36,
                },
                {
                    time: '09:00 - 11:30',
                    subject: 'Matematik',
                    topic: 'Geometri',
                    topicStudied: true,
                    solvedQuestions: 50,
                    correct: 30,
                    incorrect: 20,
                },
                {
                    time: '13:15 - 14:45',
                    subject: 'Fizik',
                    topic: 'Kuvvet ve Hareket',
                    topicStudied: false,
                    solvedQuestions: 40,
                    correct: 18,
                    incorrect: 22,
                },
                {
                    time: '18:00 - 20:30',
                    subject: 'Tarih',
                    topic: 'Osmanlı İmparatorluğu',
                    topicStudied: true,
                    solvedQuestions: 35,
                    correct: 25,
                    incorrect: 10,
                },
            ]
        },
        {
            date: '12.12.2023',
            sessions: [
                {
                    time: '14:00 - 16:30',
                    subject: 'Biyoloji',
                    topic: 'Hücre Biyolojisi',
                    topicStudied: true,
                    solvedQuestions: 60,
                    correct: 40,
                    incorrect: 20,
                },
                {
                    time: '10:30 - 12:15',
                    subject: 'Tarih',
                    topic: 'Osmanlı İmparatorluğu',
                    topicStudied: true,
                    solvedQuestions: 35,
                    correct: 25,
                    incorrect: 10,
                },
                {
                    time: '16:00 - 17:30',
                    subject: 'Kimya',
                    topic: 'Kimyasal Tepkimeler',
                    topicStudied: false,
                    solvedQuestions: 48,
                    correct: 22,
                    incorrect: 26,
                },
                {
                    time: '20:00 - 21:30',
                    subject: 'Matematik',
                    topic: 'Cebir',
                    topicStudied: true,
                    solvedQuestions: 42,
                    correct: 28,
                    incorrect: 14,
                },
            ]
        },
        {
            date: '13.12.2023',
            sessions: [
                {
                    time: '08:30 - 10:15',
                    subject: 'Fizik',
                    topic: 'Elektrik ve Manyetizma',
                    topicStudied: true,
                    solvedQuestions: 55,
                    correct: 35,
                    incorrect: 20,
                },
                {
                    time: '11:00 - 13:00',
                    subject: 'Kimya',
                    topic: 'Organik Kimya',
                    topicStudied: true,
                    solvedQuestions: 58,
                    correct: 42,
                    incorrect: 16,
                },
                {
                    time: '14:30 - 16:00',
                    subject: 'Tarih',
                    topic: 'Dünya Tarihi',
                    topicStudied: false,
                    solvedQuestions: 38,
                    correct: 20,
                    incorrect: 18,
                },
                {
                    time: '17:45 - 19:15',
                    subject: 'Biyoloji',
                    topic: 'Genetik',
                    topicStudied: true,
                    solvedQuestions: 49,
                    correct: 33,
                    incorrect: 16,
                },
            ]
        }
    ];

    return (
        <div className='studies'>
            <div className="content">
                {data.map(item =>
                    <div className='date-container' key={item.date}>
                        <div className='header'>{item.date}</div>
                        {item.sessions.map(session =>
                            <Session key={session.time} session={session} />
                        )}
                    </div>
                )}
            </div>

        </div>
    );


}