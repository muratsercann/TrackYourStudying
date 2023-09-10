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

        public IEnumerable<StudySession> GetSessions()
        {
            return _sessionRepository.GetSessions();
        }

        public IEnumerable<StudySessionByDate> GetStudySessionsByDate()
        {
            return _sessionRepository.GetStudySessionsByDate();
        }

        public bool Any(int id)
        {
            return _sessionRepository.Any(id);
        }

        public void UpdateSession(StudySession session)
        {
            _sessionRepository.UpdateSesion(session);

        }
    }
}
