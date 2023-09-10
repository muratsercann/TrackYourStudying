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
        StudySession GetSession(int id);

        bool DeleteSession(int id);

        void UpdateSesion(StudySession session);

        List<StudySessionByDate> GetStudySessionsByDate();

        bool Any(int id);

    }
}
