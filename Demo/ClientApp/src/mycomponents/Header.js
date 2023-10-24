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


export default function Header({ header, pages, selectedPage, setSelectedPage }) {
    const [showOffcanvas, setOffcanvasShow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const handleMenuClose = () => { setOffcanvasShow(false); setShowNavbar(true); };
    const handleMenuShow = () => { setOffcanvasShow(true); setShowNavbar(false); };



    return (
        <div className='header-container'>
            <div className='header-header'>

                {showNavbar &&
                    <div onClick={handleMenuShow} className="appNavbar"><BsList size={40} color="white" /></div>}
                <div className="profileIcon"><BiSolidUserCircle size={50} /></div>
                <div className='header-icon'>
                    <PiStudent color="white" weight="fill" size={70} />
                </div>

                <div>{header}</div>

                <div className="header-foot"></div>
            </div>



            {/* Menu */}

            <Offcanvas show={showOffcanvas} onHide={handleMenuClose} >
                <div className='custom-offcanvas'>
                    <Offcanvas.Header closeButton closeVariant='white'>
                        {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {
                            pages.map(item => {
                                const handleMenuSelected = () => {
                                    handleMenuClose();
                                    setSelectedPage(item);
                                };

                                let className = 'menuItem';
                                let icon = undefined;
                                if (selectedPage.key == item.key) {
                                    className += ' selected';
                                    icon = React.cloneElement(item.icon, { color: '#248ac1' });
                                }

                                return <div className={className} onClick={handleMenuSelected} key={item.key}>
                                    <div className='icon'>
                                        {icon != undefined ? icon : item.icon}
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