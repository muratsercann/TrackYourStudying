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

export function SessionForm({ reloadList }) {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);
    const [formData, setFormData] =
        useState({
            date: new Date(),
            startTime: "",
            endTime: "",
            didTopicStudy: false,
            subject: "",
            topic: "",
            solvedQuestions: 0
        });


    useEffect(() => {
        //ders seçildiğinde konular burada yüklenir
        populateTopics(); 
    }, [selectedSubject]);//seçilen ders değiştiğinde devreye girer.


    useEffect(() => {
        //dersler burada yüklenir
        populateSubject();
        Modal.setAppElement('#app');
    }, []);

    async function populateTopics() {
        if (!(selectedSubject && selectedSubject.id)) {
            return;
        }

        const response = await fetch('topic/getTopicsBySubjectId/' + selectedSubject.id); // API URL'i burada olmalı
        const data = await response.json();
        console.log("Seçilen Ders konuları :");
        console.log(data);
        setTopics(data);
    }
    async function populateSubject() {
        const response = await fetch('subject'); // API URL'i burada olmalı
        const data = await response.json();
        setSubjects(data);
        setLoading(false);
    }

    function createForm(data, selectedSubject) {

        function handleDateChange(event) {
            // Seçilen tarih değiştiğinde yapılacak işlemler burada
            formData.date = event.target.value;
            setFormData(formData);
        }

        function handleStartTimeChange(event) {
            // Başlangıç saati değiştiğinde yapılacak işlemler burada
            formData.startTime = event.target.value;
            setFormData(formData);
        }

        function handleEndTimeChange(event) {
            // Bitiş saati değiştiğinde yapılacak işlemler burada
            formData.endTime = event.target.value;
            setFormData(formData);
        }

        function handleSubjectChange(event) {
            // Ders seçildiğinde yapılacak işlemler burada
            const selectedOption = subjects.find(s => s.id.toString() === event.target.value);
            setSelectedSubject(selectedOption);

            formData.subjectId = event.target.value;
            setFormData(formData);
        }

        function handleTopicChange(event) {
            // Konu seçildiğinde yapılacak işlemler burada
            formData.topicId = event.target.value;
            setFormData(formData);
        }

        function handleQuestionCountChange(event) {
            // Soru sayısı değiştiğinde yapılacak işlemler burada
            formData.solvedQuestions = event.target.value;
            setFormData(formData);
        }

        function handleTopicReviewChange(event) {
            // Konu çalışması seçeneği değiştiğinde yapılacak işlemler burada
            formData.didTopicStudy = event.target.checked;
            setFormData(formData);
        }



        return (
            <form >
                <div className="dateSelector">
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Tarih :</label>
                        <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                    </div>
                    <div className="timeSelector">
                        <div className="mb-3">
                            <label htmlFor="time1" className="form-label">Başlangıç Saati :</label>
                            <input type="time" className="form-control" id="time1" onChange={handleStartTimeChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time2" className="form-label">Bitiş Saati :</label>
                            <input type="time" className="form-control" id="time2" onChange={handleEndTimeChange} />
                        </div>
                    </div>
                    <div className="subjectDropdown">
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Ders:</label>
                            <select className="form-select" id="subject" onChange={handleSubjectChange} >
                                <option value="">Seçiniz</option>
                                {subjects && subjects.map(s => (
                                    <option key={s.id} value={s.id}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="topicDropdown">
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Konu :</label>
                            <select className="form-select" id="subject" onChange={handleTopicChange}>
                                <option value="">Seçiniz</option>
                                {topics && topics.map(t => (
                                    <option key={t.id} value={t.id}>
                                        {t.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 questionCountInput">
                        <label htmlFor="date" className="form-label">Soru Sayısı :</label>
                        <input type="number" className="form-control" id="questionCount" onChange={handleQuestionCountChange} />
                    </div>
                    <div className="mb-3 topicReviewCheckbox">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="topicStudy"
                                onChange={handleTopicReviewChange}
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
            setShowAddButton(false);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setShowAddButton(true);
            setFormData({
                date: new Date(),
                startTime: "",
                endTime: "",
                didTopicStudy: false,
                subjectId: "",
                topicId:"",
                solvedQuestions: 0
            });
            setSelectedSubject({});
            setTopics([]);

        };

        const handleSubmit = async () => {

            try {
                const response = await fetch('/studysession/addNewSession', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Kayıt Başarılı");
                    reloadList(formData); //Dikkat bu şekilde güncelleme yaparsak sessionın bir ID si elimizde olmayacak.

                    // Başarılı durum işlemleri
                } else {
                    alert("Kayıt Başarısız");
                    // Hata durum işlemleri
                }
            } catch (error) {
                alert("hata");
                console.error('Sunucu hatası:', error);
            }
        };

        const handleSave = () => {
            // Kaydetme işlemleri burada yapılabilir
            closeModal();

            console.log("Kaydedilecek veri : ");
            console.log(formData);

            handleSubmit();

        };



        var form = createForm(data, selectedSubject);
        return (
            <div>
                {showAddButton && (
                    <a href="#" className="floating-button" onClick={openModal}>+</a>)
                }
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Örnek Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <h2>Yeni Kayıt</h2>

                    {form}

                    <div className="d-grid gap-2">
                        <button type="submit" onClick={handleSave} className="btn btn-success">Kaydet</button>
                        <button onClick={closeModal} className="btn btn-secondary">İptal</button>
                    </div>
                </Modal>
            </div>
        );
    }

    let contents = loading ? (
        <></>
    ) : (
        renderFormElements(subjects, selectedSubject)
    );

    return (
        <div id="app">{contents}</div>
    );
}
