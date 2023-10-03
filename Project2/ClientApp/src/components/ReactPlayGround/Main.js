import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


export function Main() {
    const [selectedLink, setSelectedLink] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log("useEffect");
        if (selectedLink) {
            setLoading(false);
        }
    }, [selectedLink]);

    const Page1 = () => {
        return <div>Page1</div>
    };
    const Page2 = () => {
        return <div>Page2</div>
    };
    const Page3 = () => {
        return <div>Page3</div>
    };
    const Page4 = () => {
        return <div>Page4</div>
    };

    const onClick1 = () => {
        console.log("clicked_1");
        setSelectedLink("p1");
    }
    const onClick2 = () => {
        console.log("clicked_2");
        setSelectedLink("p2");
    }

    const onClick3 = () => {
        console.log("clicked_3");
        setSelectedLink("p3");
    }

    const onClick4 = () => {
        console.log("clicked_4");
        setSelectedLink("p4");
    }

    const createContent = () => {
        if (selectedLink == "p1") {
            return <Page1 />;
        }
        if (selectedLink == "p2") {
            return <Page2 />;
        }
        if (selectedLink == "p3") {
            return <Page3 />;
        }
        if (selectedLink == "p4") {
            return <Page4 />;
        }
    };



    const content = loading ? <div>Loading...</div> : createContent();

    return (
        <>
            <a href="" className="floating-button">+</a>
            <div className="md-5">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li> <hr className="dropdown-divider"></hr></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                {content}

            </div>
        </>
    );

}
