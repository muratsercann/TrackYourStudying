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

export function SessionForm({
    session,
    reloadSessions,
    header,
    recordType,
    onClose,
    changeAddButtonVisibility }) {


    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState(getFirsData());
    const [firstLoad, setFirstLoad] = useState(true);

    const getSubmitButtonName = () => {
        if (recordType === "edit") {
            return "Güncelle"
        }
        else {
            return "Kaydet";
        }
    }

    const saveButtonName = getSubmitButtonName();

    function getFirsData() {
        if (recordType === "edit" && session) {
            console.log("form bu session bilgisi ile doldurulacak :");
            console.log(session);
            return session;
        }

        let firsData = {
            date: new Date().toJSON(),
            startTime: "",
            endTime: "",
            didTopicStudy: false,
            subject: "",
            topic: "",
            solvedQuestions: 0,
            correct: 0,
            inCorrect: 0,
        }

        console.log("getFirsData");
        console.log(firsData);

        return firsData;
    }

    useEffect(() => {
        if (firstLoad) {
            populateSubject();
            setFirstLoad(false);
        }
        if (recordType === "edit") {
            //setShowAddButton(false);
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
    function DateSelector() {

        function handleDateChange(event) {
            // Seçilen tarih değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, date: event.target.value };
            setFormData(newFormData);
        }

        return <> <div className="dateSelector mb-3">
            <label htmlFor="date" className="form-label">Tarih :</label>
            <input type="date" value={formData.date.toString().split('T')[0]} className="form-control" id="date" onChange={handleDateChange} />
        </div>
        </>
    }

    function TimeSelector() {
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

        return <>
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
        </>

    }

    function SubjectDropdown() {

        function handleSubjectChange(event) {
            // Ders seçildiğinde yapılacak işlemler burada
            const selectedOption = subjects.find(s => s.id.toString() === event.target.value);
            setSelectedSubject(selectedOption);

            const newFormData = { ...formData, subjectId: event.target.value };
            setFormData(newFormData);
        }

        return <>
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
        </>
    }

    function TopicDropDown() {

        function handleTopicChange(event) {
            // Konu seçildiğinde yapılacak işlemler burada
            const newFormData = { ...formData, topicId: event.target.value };
            setFormData(newFormData);
        }

        return <>
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
        </>
    }

    function QuestionCountInput() {

        function handleQuestionCountChange(event) {
            // Soru sayısı değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, solvedQuestions: event.target.value };
            setFormData(newFormData);

        }
        return <>
            <div>
                <div className="mb-3 questionCountInput">
                    <label htmlFor="date" className="form-label">Soru Sayısı :</label>
                    <input type="number" className="form-control" id="questionCount" onChange={handleQuestionCountChange} value={formData.solvedQuestions} />
                </div>
            </div>
        </>
    }

    function TopicReviewCheckBox() {
        function handleTopicReviewChange(event) {
            // Konu çalışması seçeneği değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, didTopicStudy: event.target.checked };
            setFormData(newFormData);
        }

        return <>
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
        </>
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
            let correct = formData.correct;
            let inCorrect = formData.inCorrect;
            if (event.target.valueAsNumber < formData.correct + formData.inCorrect) {
                correct = 0;
                inCorrect = 0;
            }
            const newFormData = {
                ...formData,
                correct: correct,
                inCorrect: inCorrect,
                solvedQuestions: event.target.valueAsNumber
            };
            setFormData(newFormData);

        }

        function handleCorrectCountChange(event) {
            // Soru sayısı değiştiğinde yapılacak işlemler burada
            let correct = event.target.valueAsNumber;
            let inCorrect = formData.inCorrect;
            if (event.target.valueAsNumber > formData.solvedQuestions) {
                correct = formData.solvedQuestions;
                inCorrect = 0;
            }
            else if ((event.target.valueAsNumber + formData.inCorrect) > formData.solvedQuestions) {
                inCorrect = formData.solvedQuestions - correct;
            }
            const newFormData = { ...formData, correct: correct, inCorrect: inCorrect };
            setFormData(newFormData);

        }

        function handleInCorrectCountChange(event) {
            // Soru sayısı değiştiğinde yapılacak işlemler burada
            let inCorrect = event.target.valueAsNumber;
            if (event.target.valueAsNumber + formData.correct > formData.solvedQuestions) {
                if (formData.solvedQuestions - formData.correct >= 0) {
                    inCorrect = formData.solvedQuestions - formData.correct;
                }
            }

            const newFormData = { ...formData, inCorrect: inCorrect };
            setFormData(newFormData);

        }



        function handleTopicReviewChange(event) {
            // Konu çalışması seçeneği değiştiğinde yapılacak işlemler burada
            const newFormData = { ...formData, didTopicStudy: event.target.checked };
            setFormData(newFormData);
        }

        return (
            <form >
                <div>
                    {/*<DateSelector />*/}
                    <div className="dateSelector mb-3">
                        <label htmlFor="date" className="form-label">Tarih :</label>
                        <input type="date" value={formData.date.toString().split('T')[0]} className="form-control" id="date" onChange={handleDateChange} />
                    </div>

                    {/*<TimeSelector />*/}

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
                    {/*<SubjectDropdown />*/}
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
                    {/*<TopicDropDown />*/}
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
                    <div>
                        <div className="mb-3 questionCountInput">
                            <div class="row">
                                <div className="col">
                                    <input type="number" className="form-control" id="questionCount" placeHolder="Soru" onChange={handleQuestionCountChange} value={(() => {
                                        if (formData.solvedQuestions > 0) {
                                            return formData.solvedQuestions;
                                        }
                                    })()} />
                                </div>
                                <div className="col">
                                    <input type="number" onChange={handleCorrectCountChange} className="form-control" placeholder="Doğru" value={(() => {
                                        if (formData.correct > 0) {
                                            return formData.correct;
                                        }
                                    })()} />
                                </div>
                                <div className="col">
                                    <input type="number" onChange={handleInCorrectCountChange} className="form-control" placeholder="Yanlış" value={(() => {
                                        if (formData.inCorrect > 0) {

                                            return formData.inCorrect;
                                        }
                                        else return "";
                                    })()} />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*<TopicReviewCheckBox />*/}
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
                    reloadSessions();
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
                    reloadSessions();

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
            console.log("Kaydedilecek veri : ");
            console.log(formData);

            formData.correct = formData.correct ? formData.correct : 0;
            formData.inCorrect = formData.inCorrect ? formData.inCorrect : 0;

            if ((formData.correct + formData.inCorrect) > formData.solvedQuestions) {
                alert("Doğru ve yanlışların toplamı çözülen sorudan fazla olamaz !");
                return;
            }



            if (formData.solvedQuestions > 0 && formData.correct > 0) {
                let unAnswered = formData.solvedQuestions - (formData.correct + formData.inCorrect)

                formData.unAnswered = unAnswered;
            }

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

            onClose();

        };

        const form = createForm(data, selectedSubject);
        if (changeAddButtonVisibility) {
            changeAddButtonVisibility(false);
        }
        return (
            <div>
                <Modal
                    isOpen={true}
                    onRequestClose={onClose}
                    contentLabel="Örnek Modal"
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <h2>{header}</h2>

                    {form}

                    <div className="d-grid gap-2">
                        <button type="submit" onClick={handleSave} className="btn btn-success">{getSubmitButtonName()}</button>
                        <button onClick={onClose} className="btn btn-secondary">İptal</button>
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
