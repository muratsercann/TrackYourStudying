using DbManagement.Repositories;
using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DbManagement;

namespace DbManagement.Services
{
    public class SessionService
    {
        private readonly ISessionRepository _sessionRepository;

        public SessionService(ISessionRepository sessionRepository)
        {

            _sessionRepository = sessionRepository ?? throw new ArgumentNullException(nameof(sessionRepository));
        }

        public void CreateSession(StudySession session)
        {
            _sessionRepository.CreateSession(session);
        }

        public bool DeleteSession(int id)
        {
            return _sessionRepository.DeleteSession(id);
        }

        public StudySession GetSession(int id)
        {
            return _sessionRepository.GetSession(id);
        }

        public bool Any(int id)
        {
            return _sessionRepository.Any(id);
        }

        public bool Any(int id,string username)
        {
            return _sessionRepository.Any(id,username);
        }

        public IEnumerable<StudySession> GetSessions()
        {
            return _sessionRepository.GetSessions();
        }

        public IEnumerable<StudySession> GetSessions(string username)
        {
            return _sessionRepository.GetSessions(username);
        }

        public IEnumerable<StudySessionByDate> GetStudySessionsByDate()
        {
            return _sessionRepository.GetStudySessionsByDate();
        }

        public IEnumerable<StudySessionByDate> GetStudySessionsByDate(string username)
        {
            return _sessionRepository.GetStudySessionsByDate(username);
        }

        

        public void UpdateSession(StudySession session)
        {
            _sessionRepository.UpdateSesion(session);

        }

        /// <summary>
        /// Tarihe göre çalışma süresi istatistiğini verir.
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public List<DateStudyDuration> GetDateStudyDurationStatistic(string username)
        {
            return _sessionRepository.GetDateStudyDurationStatistic(username);
        }

        /// <summary>
        /// Tarihe göre çözülen soru istatistiği
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public List<DateSolvedQuestions> GetDateSolvedQuestionsStatistic(string username)
        {
            return _sessionRepository.GetDateSolvedQuestionsStatistic(username);
        }

        /// <summary>
        /// Derslere göre çalışma süresi istatistiği
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public List<SubjectDuration> GetSubjectDurationStatistic(string username)
        {
            return _sessionRepository.GetSubjectDurationStatistic(username);
        }

        /// <summary>
        /// Derslere göre soru çözüm istatistiği
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public List<SubjectSolvedQuestions> GetSubjectSolvedQuestionsStatistic(string username)
        {
            return _sessionRepository.GetSubjectSolvedQuestionsStatistic(username);
        }

        public ChartsDataModel GetChartsData(string username)
        {
            ChartsDataModel result = new ChartsDataModel();

            result.DateStudyDurations = GetDateStudyDurationStatistic(username);
            result.DateSolvedQuestions = GetDateSolvedQuestionsStatistic(username);
            result.SubjectDurations = GetSubjectDurationStatistic(username);
            result.SubjectSolvedQuestionss = GetSubjectSolvedQuestionsStatistic(username);

            return result;
        }
    }
}
