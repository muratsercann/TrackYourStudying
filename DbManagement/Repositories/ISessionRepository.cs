using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public interface ISessionRepository
    {
        void CreateSession(StudySession session);

        void CreateSessions(List<StudySession> session);

        List<StudySession> GetSessions();

        List<StudySession> GetSessions(string userName);

        StudySession GetSession(int id);

        bool Any(int id, string username);

        bool DeleteSession(int id);

        void UpdateSesion(StudySession session);

        List<StudySessionByDate> GetStudySessionsByDate();

        List<StudySessionByDate> GetStudySessionsByDate(string username);

        bool Any(int id);

        List<DateStudyDuration> GetDateStudyDurationStatistic(string username);
        List<DateSolvedQuestions> GetDateSolvedQuestionsStatistic(string username);
        List<SubjectDuration> GetSubjectDurationStatistic(string username);
        List<SubjectSolvedQuestions> GetSubjectSolvedQuestionsStatistic(string username);
    }
}
