import React from 'react'
import '../styles/home.css'

import Header from './Header'
export default function Home() {

    const filterData = [
        { id: 0, value: "Son 3 Gün" },
        { id: 1, value: "Son 7 Gün" },
        { id: 2, value: "Son 10 Gün" },
        { id: 3, value: "Son 1 Ay" },
        { id: 4, value: "Son 2 Ay" },
        { id: 5, value: "Son 3 Ay" },
        { id: 6, value: "Tümü" },
    ]

    const handleFilterChange = (e) => {
        alert("");
    }

    return (
        <div className='home-container'>
            <Header />

            <div className="home-content">

                <div className="home-content-filter">
                    <div className="mb-3">
                        <select className="form-select" id="subject">
                            <option key="1" value="Action">Action</option>
                            <option key="2" value="Help">Help</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </div>
    );
}