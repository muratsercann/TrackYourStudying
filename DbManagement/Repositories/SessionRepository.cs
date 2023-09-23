using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using static System.Collections.Specialized.BitVector32;

namespace DbManagement.Repositories
{
    public class SessionRepository : ISessionRepository
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
            throw new NotImplementedException();
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
        public bool Any(int id, string username)
        {
            return _dbContext.StudySessions.Where(session => session.Id == id && session.UserName == username).Any();
        }
        public List<StudySession> GetSessions()
        {
            var sessions = _dbContext.StudySessions.Include(s => s.Topic).ThenInclude(s => s.Subject).ToList();

            return sessions;
        }

        public List<StudySession> GetSessions(string username)
        {
            var sessions = _dbContext.StudySessions.Include(s => s.Topic).ThenInclude(s => s.Subject).Where(s => s.UserName == username).ToList();

            return sessions;
        }

        public List<StudySessionByDate> GetStudySessionsByDate(string username)
        {
            //TODO : (msercan) Burada kullanıcıya göre de filtreleme yapılacak 
            List<StudySessionByDate> result = (from s in
                                        _dbContext.StudySessions.Include(s => s.Topic).ThenInclude(s => s.Subject).Where(s => s.UserName == username)
                                               orderby s.StartTime, s.EndTime
                                               group s by s.Date.Date into newGroup
                                               orderby newGroup.Key descending
                                               select
                                               new StudySessionByDate
                                               {

                                                   Date = newGroup.Key,
                                                   Sessions = newGroup.ToList(),
                                                   TotalSolvedQuestion =
                                                   newGroup.Sum(x => x.SolvedQuestions),
                                                   TotalDurationMinutes =
                                                   newGroup.Sum(x => x.StudyDurationMinutes)
                                               }).ToList();

            return result;
        }

        public List<StudySessionByDate> GetStudySessionsByDate()
        {
            //TODO : (msercan) Burada kullanıcıya göre de filtreleme yapılacak 
            List<StudySessionByDate> result = (from s in
                                        _dbContext.StudySessions.Include(s => s.Topic).ThenInclude(s => s.Subject)
                                               orderby s.StartTime, s.EndTime
                                               group s by s.Date.Date into newGroup
                                               orderby newGroup.Key descending
                                               select
                                               new StudySessionByDate
                                               {

                                                   Date = newGroup.Key,
                                                   Sessions = newGroup.ToList(),
                                                   TotalSolvedQuestion =
                                                   newGroup.Sum(x => x.SolvedQuestions),
                                                   TotalDurationMinutes =
                                                   newGroup.Sum(x => x.StudyDurationMinutes)
                                               }).ToList();

            return result;
        }

        public void UpdateSesion(StudySession session)
        {
            _dbContext.Update(session);
            _dbContext.SaveChanges();
        }

        #region İstatistiksel Metodlar

        public List<DateStudyDuration> GetDateStudyDurationStatistic(string username)
        {
            List<DateStudyDuration> result = (from s in _dbContext.StudySessions
                                              where s.UserName == username
                                              group s by s.Date.Date into newGroup
                                              orderby newGroup.Key ascending
                                              select new DateStudyDuration()
                                              {
                                                  Date = newGroup.Key,
                                                  StudyDurationMinutes = newGroup.Sum(x => x.StudyDurationMinutes),
                                              }).ToList();

            return result;
        }

        public List<DateSolvedQuestions> GetDateSolvedQuestionsStatistic(string username)
        {
            List<DateSolvedQuestions> result = (from s in _dbContext.StudySessions
                                                where s.UserName == username
                                                group s by s.Date.Date into newGroup
                                                orderby newGroup.Key ascending
                                                select new DateSolvedQuestions()
                                                {
                                                    Date = newGroup.Key,
                                                    SolvedQuestion = newGroup.Sum(x => x.SolvedQuestions),
                                                }).ToList();

            return result;
        }

        public List<SubjectDuration> GetSubjectDurationStatistic(string username)
        {
            List<SubjectDuration> result = (from session in _dbContext.StudySessions.Include(s => s.Subject)
                                            where session.UserName == username
                                            group session by
                                            new { session.SubjectId, SubjectName = session.Subject.Name } into newGroup
                                            orderby newGroup.Key.SubjectId ascending
                                            select new SubjectDuration()
                                            {
                                                SubjectName = newGroup.Key.SubjectName,
                                                StudyDurationMinutes = newGroup.Sum(x => x.StudyDurationMinutes),
                                            }).ToList();



            return result;
        }

        public List<SubjectSolvedQuestions> GetSubjectSolvedQuestionsStatistic(string username)
        {
            List<SubjectSolvedQuestions> result = (from session in _dbContext.StudySessions.Include(s => s.Subject)
                                                   where session.SolvedQuestions > 0 && session.UserName == username
                                                   group session by new
                                                   { session.SubjectId, SubjectName = session.Subject.Name } into newGroup
                                                   orderby newGroup.Key.SubjectId ascending
                                                   select new SubjectSolvedQuestions()
                                                   {
                                                       SubjectName = newGroup.Key.SubjectName,
                                                       SolvedQuestions = newGroup.Sum(x => x.SolvedQuestions),
                                                   }).ToList();

            return result;
        }

        #endregion


    }
}
