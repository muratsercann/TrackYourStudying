import React, { useState } from 'react';

export function DropdownTest() {
    const [selectedOption, setSelectedOption] = useState(""); // Seçili değeri saklamak için state

    const options = [
        { value: "", label: "Seçiniz" }, // Boş bir değer ile başlayan bir seçenek
        { value: "option1", label: "Seçenek 1" },
        { value: "option2", label: "Seçenek 2" },
        { value: "option3", label: "Seçenek 3" },
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Dropdown Örneği</h1>
            <select value={selectedOption} onChange={handleOptionChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <p>Seçilen seçenek: {selectedOption}</p>
        </div>
    );
}
