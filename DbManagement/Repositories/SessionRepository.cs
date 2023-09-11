using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class SessionRepository : ISessionRepository, IDisposable
    {
        private readonly TrackYourStudyContext _dbContext;
        private bool disposedValue;

        public SessionRepository(TrackYourStudyContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool Any(int id)
        {

            return _dbContext.StudySessions.Where(s => s.Id == id).Any();
        }

        public void CreateSession(StudySession session)
        {
            _dbContext.Add(session);
            _dbContext.SaveChanges();
        }

        public void CreateSessions(List<StudySession> sessions)
        {

        }

        public bool DeleteSession(int id)
        {
            try
            {
                StudySession session = GetSession(id);

                _dbContext.Remove(session);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
                throw ex;
            }

            return true;
        }

        public StudySession GetSession(int id)
        {

            StudySession session = _dbContext.StudySessions.Where(session => session.Id == id).First();

            return session;
        }

        public List<StudySession> GetSessions()
        {
            var sessions = _dbContext.StudySessions.Include(s => s.Topic).ThenInclude(s => s.Subject).ToList();

            return sessions;
        }

        public List<StudySessionByDate> GetStudySessionsByDate()
        {
            List<StudySession> sessions = GetSessions();

            List<StudySessionByDate> result = (from s in sessions orderby 
                                               s.StartTime, s.EndTime
                                               group s by s.Date.Date into newGroup
                                               orderby newGroup.Key descending
                                               select
                                               new StudySessionByDate { Date = newGroup.Key, Sessions = newGroup.ToList() }).ToList();

            return result;
        }

        public void UpdateSesion(StudySession session)
        {
            _dbContext.Update(session);
            _dbContext.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        // ~SessionRepository()
        // {
        //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     Dispose(disposing: false);
        // }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
