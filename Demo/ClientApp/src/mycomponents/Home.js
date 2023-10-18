import React from 'react'
import '../styles/home.css'
import Header from './Header'
import HomeContentItem from './HomeContentItem'

import { PiTimerBold, PiTimerLight } from "react-icons/pi";
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

    const data = [
        {
            header: "Ortalama Çalışma Süresi",
            icon: <PiTimerLight color='gray' size='95' />,
            label: "7sa 45dk",
        },

        {
            header: "Ortalama Soru Çözüm",
            icon: <PiTimerLight color='gray' size='95' />,
            label: "245",
        },
        {
            header: "Toplam Soru Çözüm",
            icon: <PiTimerLight color='gray' size='95' />,
            label: "7sa 45dk",
        },

        {
            header: "Toplam Çalışma Süresi",
            icon: <PiTimerLight color='gray' size='95' />,
            label: "245",
        }
    ];

    return (
        <div className='home-container'>
            <Header header='Ders Takip'/>

            <div className="home-content">

                <div className="filter">
                    <div className="mb-3">
                        <select className="form-select" id="subject">
                            {filterData.map(item =>
                                <option key={item.id} value={item.value}>{item.value}</option>
                            )}
                        </select>
                    </div>
                </div>

                {data.map(item => <HomeContentItem header={item.header} icon={item.icon} label={item.label} />)}

            </div>
        </div>
    );
}