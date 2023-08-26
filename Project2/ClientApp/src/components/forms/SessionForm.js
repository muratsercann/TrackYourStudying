import React, { Component } from 'react';
import { DateSelector } from './DateSelector';
import { TimeSelector } from './TimeSelector';
import { SubjectDropdown } from './SubjectDropdown';
import { TopicDropdown } from './TopicDropDown';
import { QuestionCountInput } from './QuestionCountInput';
import { TopicReviewCheckbox } from './TopicReviewCheckbox';

export class SessionForm extends Component {
    static displayName = SessionForm.name;

    render() {
        return (

            <div className="sessionForm">
                <div className="text-center">Yeni Kayıt</div>
                <DateSelector />
                <TimeSelector />
                <SubjectDropdown />
                <TopicDropdown />
                <QuestionCountInput />
                <TopicReviewCheckbox />
            </div>
        );
    }
}
