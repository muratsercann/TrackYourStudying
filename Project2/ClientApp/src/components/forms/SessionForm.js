import React, { Component } from 'react';
import { DateSelector } from './DateSelector';
import { TimeSelector } from './TimeSelector';
import { SubjectDropdown } from './SubjectDropdown';
import { TopicDropdown } from './TopicDropDown';
import { QuestionCountInput } from './QuestionCountInput';
import { TopicReviewCheckbox } from './TopicReviewCheckbox';

export class SessionForm extends Component {
    static displayName = SessionForm.name;

    constructor(props) {
        super(props);
        this.state = { subjects: this.props.subjects, selectedSubject: {} , loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderFormElements(data, selectedSubject) {
        return <>
            <DateSelector />
            <TimeSelector />
            <SubjectDropdown subjects={data} />
            <TopicDropdown selectedSubject={selectedSubject} />
            <QuestionCountInput />
            <TopicReviewCheckbox />
        </>
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : SessionForm.renderFormElements(this.state.subjects, this.state.selectedSubject);

        return (

            <div className="sessionForm">
                <div className="text-center">Yeni Kayıt</div>
                {contents}
            </div>
        );
    }


    async populateData() {
        const response = await fetch('subject');
        const data = await response.json();
        this.setState({ subjects: data, loading: false });
    }


}
