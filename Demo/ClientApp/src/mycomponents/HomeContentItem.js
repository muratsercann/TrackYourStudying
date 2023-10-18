import React from 'react'
import '../styles/homeContentItem.css'
import { PiStudent } from "react-icons/pi";
import { BsList } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiTimerLight } from "react-icons/pi";
export default function HomeContentItem({ header, icon, label }) {


    return (
        <div className='home-content-item'>
            <div className='header'>
                {header}
            </div>
            <div className='container'>
                <div className='left'>
                    <div>
                        {icon}
                    </div>
                </div>

                <div className='right'>
                    <div> {label} </div>
                </div>
            </div>
        </div>
    );
}