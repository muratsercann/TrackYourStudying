import React from 'react'
import '../styles/header.css'
//import { Student } from 'phosphor-react';
import { PiStudent } from "react-icons/pi";
// import { List } from 'react-bootstrap-icons';
import { BsList } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";

export default function Header() {

    return (
        <div className='header-container'>
            <div className='header-header'>

                <div className="appNavbar"><BsList size={40} /></div>
                <div className="profileIcon"><BiSolidUserCircle size={50} /></div>
                <div className='header-icon'>
                    <PiStudent color="white" weight="fill" size={70} />
                </div>

                <div>Ders Takip</div>

                <div className="header-foot"></div>
            </div>

        </div>
    );
}