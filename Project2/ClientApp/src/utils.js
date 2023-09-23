export default class utils {

    //Dakikayı -> 1sa 30dk, 12sa 3dk, 5dk gibi formata dönüştürür.
    static minutesToHours = (minutes) => {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;

        var minutesStr = "";

        let result = "";
        if (hours > 0) {
            result += (hours.toString() + "sa ")
        }

        if (remainingMinutes > 0) {
            result += remainingMinutes < 10 ? ("" + remainingMinutes) : remainingMinutes.toString();
            result += "dk";
        }

        return result;
    }

    //Dakikayı hh:mm formatına dönüştürür
    static convertMinutesToTimeFormat = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        const hoursStr = String(hours).padStart(2, '0');
        const minutesStr = String(remainingMinutes).padStart(2, '0');

        return `${hoursStr}:${minutesStr}`;
    }

    static getAuthToken = () => {
        return localStorage.getItem('token');
    }

    static getTokenBearer = () => {
        return 'Bearer ' + utils.getAuthToken()
    }



    //FETH_FUNCTIONS

    ///USER
    static validateAuthorization = async () => {
        const response = await fetch('/user', {
            method: 'GET',
            headers: {
                'Authorization': this.getTokenBearer(),
                'Content-Type': 'application/json',
            },
        });

        return response;
    }

    static login = async (username, password) => {
        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Authorization': this.getTokenBearer(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        return response;
    }


    //SESSIONS
    static getStudySessions = async () => {
        const response = await fetch('studysession', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });
        return response;
    }

    static createNewSession = async (session) => {
        const response = await fetch('/studysession/addNewSession', {
            method: 'POST',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(session),
        });

        return response;
    }

    static updateSession = async (id, session) => {
        const response = await fetch(`studysession/${id}`, {
            method: 'PUT', // Veya 'POST' olarak ayarlayabilirsiniz
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(session),
        });

        return response;
    }

    static deleteSession = async (id) => {
        const response = await fetch('studysession/deletesession/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },
        });

        return response;
    }

    ///SUBJECTS
    static getSubjects = async () => {
        const response = await fetch('subject', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });

        return response;
    }

    ///TOPICS
    static getTopicsBySubId = async (subjectId) => {
        const response = await fetch('topic/getTopicsBySubjectId/' + subjectId, {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },
        });

        return response;
    }


    ///CHARTS

    static getDailySolvedQuestions = async () => {
        const response = await fetch('studysession/getDateSolvedQuestionsStatistic', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });

        return response;
    }

    static getDailyStudyDuration = async () => {
        const response = await fetch('studysession/getDateStudyDurationStatistic', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });

        return response;
    }

    static getSubjectSolvedQuestion = async () => {
        const response = await fetch('studysession/getSubjectSolvedQuestionsStatistic', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });

        return response;
    }


    static getSubjectStudyDuration = async () => {
        const response = await fetch('studysession/getSubjectDurationStatistic', {
            method: 'GET',
            headers: {
                'Authorization': utils.getTokenBearer(),
                'Content-Type': 'application/json',
            },

        });

        return response;
    }


    static apiRequest = {
        user: {
            validateAuhorization: utils.validateAuthorization,
            login: utils.login,
        },
        session: {
            sessions: utils.getStudySessions,
            newSession: utils.createNewSession,
            deleteSession: utils.deleteSession,
            updateSession: utils.updateSession,
        },
        subject: {
            subjects: utils.getSubjects,
        },
        topic: {
            topicsBySubjectId: utils.getTopicsBySubId,
        },
        chart: {
            dailySolvedQuestion: utils.getDailySolvedQuestions,
            dailyStudyDuration: utils.getDailyStudyDuration,
            subjectSolvedQuestion: utils.getSubjectSolvedQuestion,
            subjectStudyDuration: utils.getSubjectStudyDuration,
        },        

    }

}