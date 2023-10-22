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


export default function Header({ header, pages, setSelectedPage }) {
    const [show, setShow] = useState(false);

    const handleMenuClose = () => setShow(false);
    const handleMenuShow = () => setShow(true);



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
                        {
                            pages.map(item => {
                                const handleMenuSelected = () => {
                                    setShow(false);
                                    setSelectedPage(item);
                                };
                                return <div className='menuItem' onClick={handleMenuSelected} key={item.key}>
                                    <div className='icon'>
                                        {item.icon}
                                    </div>
                                    <div className='label' >
                                        {item.label}
                                    </div>
                                </div>
                            }
                            )}
                    </Offcanvas.Body>
                </div>
            </Offcanvas>
        </div >
    );
}