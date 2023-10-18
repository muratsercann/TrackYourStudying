import React, { useState } from 'react'
import '../styles/header.css'
//import { Student } from 'phosphor-react';
import { PiStudent } from "react-icons/pi";
// import { List } from 'react-bootstrap-icons';
import { BsList } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';


export default function Header({header}) {
    const [show, setShow] = useState(false);

    const handleMenuClose = () => setShow(false);
    const handleMenuShow = () => setShow(true);


    const menuData = [
        {
            key : 1,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Ana Sayfa',
        }, {
            key : 2,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Çalışmalarım',
        }, {
            key : 3,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Denemelerim',
        }, {
            key : 4,
            icon: <AiFillHome color='white' size={30} />,
            label: 'Grafikler',
        },

    ];

    return (
        <div className='header-container'>
            <div className='header-header'>

                <div onClick={handleMenuShow} className="appNavbar"><BsList size={40} color="white" /></div>
                <div className="profileIcon"><BiSolidUserCircle size={50} /></div>
                <div className='header-icon'>
                    <PiStudent color="white" weight="fill" size={70} />
                </div>

                <div>{header}</div>

                <div className="header-foot"></div>
            </div>



            {/* Menu */}

            <Offcanvas show={show} onHide={handleMenuClose}>
                <div className='custom-offcanvas'>
                    <Offcanvas.Header closeButton closeVariant='white'>
                        {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        {menuData.map(item =>
                            <div className='menuItem' key={item.key}>
                                <div className='icon'>
                                    {item.icon}
                                </div>
                                <div className='label' >
                                    {item.label}
                                </div>
                            </div>
                        )}
                    </Offcanvas.Body>
                </div>
            </Offcanvas>
        </div >
    );
}