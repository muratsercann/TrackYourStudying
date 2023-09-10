import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';


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

export function SessionForm({ session, reloadList, header, cancelEdit, recordType }) {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState((false || session));
    const [showAddButton, setShowAddButton] = useState(true);
    const [formData, setFormData] =
        useState(firsData());
    const [firstLoad, setFirstLoad] = useState(true);


    const getSaveButtonName = () => {
        if (recordType === "edit") {
            return "Güncelle"
        }
        else {
            return "Kaydet";
        }
    }

    const saveButtonName = getSaveButtonName();

    function firsData() {
        if (recordType === "edit" && session) {
            console.log("form bu session bilgisi ile doldurulacak :");
            console.log(session);
            return session;
        }

        var firsData = {
            date: new Date().toJSON(),
            startTime: "",
            endTime: "",
            didTopicStudy: false,
            subject: "",
            topic: "",
            solvedQuestions: 0
        }

        console.log("firsData");
        console.log(firsData);

        return firsData
    }

    useEffect(() => {
        if (firstLoad) {
            populateSubject();
            setFirstLoad(false);
        }
        Modal.setAppElement('#app');
    }, [firstLoad]);

    useEffect(() => {
        //ders seçildiğinde konular burada yüklenir
        populateTopics();
    }, [selectedSubject]);//seçilen ders değiştiğinde devreye girer.




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

        if (session) {
            setSelectedSubject(data.filter(subject => subject.id === session.subjectId)[0]);
        }
    }

    function createForm(data, selectedSubject) {

        function handleDateChange(event) {
            // Seçilen tarih değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, date: event.target.value };
            setFormData(newFormData);
        }

        function handleStartTimeChange(event) {
            // Başlangıç saati değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, startTime: event.target.value };
            setFormData(newFormData);
        }

        function handleEndTimeChange(event) {
            // Bitiş saati değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, endTime: event.target.value };
            setFormData(newFormData);
        }

        function handleSubjectChange(event) {
            // Ders seçildiğinde yapılacak işlemler burada
            const selectedOption = subjects.find(s => s.id.toString() === event.target.value);
            setSelectedSubject(selectedOption);

            const newFormData = { ...formData, subjectId: event.target.value };
            setFormData(newFormData);
        }

        function handleTopicChange(event) {
            // Konu seçildiğinde yapılacak işlemler burada
            const newFormData = { ...formData, topicId: event.target.value };
            setFormData(newFormData);
        }

        function handleQuestionCountChange(event) {
            // Soru sayısı değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, solvedQuestions: event.target.value };
            setFormData(newFormData);
        }

        function handleTopicReviewChange(event) {
            // Konu çalışması seçeneği değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, didTopicStudy: event.target.checked };
            setFormData(newFormData);
        }



        return (
            <form >
                <div className="dateSelector">
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Tarih :</label>
                        <input type="date" value={formData.date.toString().split('T')[0]} className="form-control" id="date" onChange={handleDateChange} />
                    </div>
                    <div className="timeSelector">
                        <div className="mb-3">
                            <label htmlFor="time1" className="form-label">Başlangıç Saati :</label>
                            <input type="time" value={formData.startTime} className="form-control" id="time1" onChange={handleStartTimeChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time2" className="form-label">Bitiş Saati :</label>
                            <input type="time" className="form-control" id="time2" onChange={handleEndTimeChange} value={formData.endTime} />
                        </div>
                    </div>
                    <div className="subjectDropdown">
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Ders:</label>
                            <select className="form-select" value={formData.subjectId > 0 && formData.subjectId} id="subject" onChange={handleSubjectChange} >
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
                            <select className="form-select" id="subject" onChange={handleTopicChange} value={formData.topicId > 0 && formData.topicId} >
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
                        <input type="number" className="form-control" id="questionCount" onChange={handleQuestionCountChange} value={formData.solvedQuestions} />
                    </div>
                    <div className="mb-3 topicReviewCheckbox">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="topicStudy"
                                onChange={handleTopicReviewChange}
                                checked={formData.didTopicStudy}
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
            setSelectedSubject({});
            setTopics([]);
            setFormData({
                date: new Date(),
                startTime: "",
                endTime: "",
                didTopicStudy: false,
                subjectId: "",
                topicId: "",
                solvedQuestions: 0
            });

            cancelEdit && cancelEdit();
        };

        const updateSession = async () => {
            try {
                const response = await fetch(`studysession/${session.id}`, {
                    method: 'PUT', // Veya 'POST' olarak ayarlayabilirsiniz
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Veri güncelleme başarılı oldu
                    console.log('Veri güncellendi.');
                    reloadList();
                    // Veriyi yeniden yükleme veya kullanıcı arabiriminizi güncelleme
                } else {
                    // Veri güncelleme başarısız oldu
                    console.error('Veri güncelleme başarısız oldu.');
                }
            } catch (error) {
                console.error('Bir hata oluştu:', error);
            }
        }

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
                    reloadList();

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
            if (recordType === "new") {
                handleSubmit();
            }
            else if (recordType === "edit") {
                //burada kayıt güncelleme için gerekli kodlar yer alacak.
                updateSession();

            }
            else {
                alert("Kayıt türü belirtilmemiş.");
            }

        };



        var form = createForm(data, selectedSubject);
        return (
            <div>
                {(showAddButton && !session) && (
                    <a href="#" className="floating-button" onClick={openModal}>+</a>)
                }
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Örnek Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <h2>{header}</h2>

                    {form}

                    <div className="d-grid gap-2">
                        <button type="submit" onClick={handleSave} className="btn btn-success">{saveButtonName}</button>
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
