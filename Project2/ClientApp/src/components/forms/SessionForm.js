import React, { useState, useEffect } from 'react';

export function SessionForm(props) {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateData();
    }, []);

    async function populateData() {
        const response = await fetch('subject'); // API URL'i burada olmalı
        const data = await response.json();
        setSubjects(data);
        setLoading(false);
    }

    function renderFormElements(data, selectedSubject) {

        console.log("renderFormElements data : ")
        console.log(subjects);

        function onSubjectChanged(event) {
            const selectedOption = subjects.find(s => s.id.toString() === event.target.value);
            setSelectedSubject(selectedOption);
            setTopics(selectedOption.topics);
        }

        var form = <form>
            <div className="dateSelector">
                {/*Date*/}
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Tarih :</label>
                    <input type="date" className="form-control" id="date" ></input>
                </div>
                {/*Time*/}
                <div className="timeSelector">
                    <div className="mb-3">
                        <label htmlFor="time1" className="form-label">Başlangıç Saati :</label>
                        <input type="time" className="form-control" id="time1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time2" className="form-label">Bitiş Saati :</label>
                        <input type="time" className="form-control" id="time2" />
                    </div>
                </div>
                {/*Subject*/}
                <div className="subjectDropdown">
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Ders:</label>
                        <select className="form-select" id="subject" onChange={e => onSubjectChanged(e)}>
                            {subjects.map(s => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/*Topic*/}
                <div className="topicDropdown">
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Konu :</label>
                        <select className="form-select" id="subject">
                            {topics.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/*Topic Review*/}
                <div className="mb-3 topicReviewCheckbox">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="topicStudy"
                        />
                        <label className="form-check-label" htmlFor="topicStudy">
                            Konu Çalışması
                        </label>
                    </div>
                </div>
            </div>
        </form>
        return (
            form
        );
    }

    let contents = loading ? (
        <p>
            <em>Loading...</em>
        </p>
    ) : (
        renderFormElements(subjects, selectedSubject)
    );

    return (
        <div className="sessionForm">
            <div className="text-center">Yeni Kayıt</div>
            {contents}
        </div>
    );
}
