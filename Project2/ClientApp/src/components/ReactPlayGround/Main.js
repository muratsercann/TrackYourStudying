import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


// Modal stilini özelleştirin
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '80%', // Genişlik
        maxHeight: '80vh', // Yükseklik
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#343a40',
        border: 'none',
        borderRadius: '8px',
        padding: '20px',
        color: '#fff',
        overflow: 'auto', // Gerektiğinde kaydırma çubukları ekle
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

export function Main() {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        populateData();
        Modal.setAppElement('#app');
    }, []);

    async function populateData() {
        const response = await fetch('subject', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        setSubjects(data);
        setLoading(false);
    }

    function createForm(data, selectedSubject) {

        function onSubjectChanged(event) {
            const selectedOption = subjects.find(s => s.id.toString() === event.target.value);
            setSelectedSubject(selectedOption);
            setTopics(selectedOption.topics);
        }

        return (
            <form>
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
        );
    }

    function renderFormElements(data, selectedSubject) {

        const openModal = () => {
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
        };

        const handleSave = () => {
            // Kaydetme işlemleri burada yapılabilir
            closeModal();
        };

        var form = createForm(data, selectedSubject);
        return (
            <div>
                <button onClick={openModal}>Modal Aç</button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Örnek Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <h2>Seçili çalışmayı silmek istediğinizden emin misiniz?</h2>

                    <div className="d-grid gap-1">
                        <button onClick={handleSave} className="btn btn-success">Sil</button>
                        <button onClick={closeModal} className="btn btn-secondary">İptal</button>
                    </div>
                </Modal>
            </div>
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
        <div id="app">{contents}</div>

    );

}
