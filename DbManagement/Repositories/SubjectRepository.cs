using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class SubjectRepository : ISubjectRepository, IDisposable
    {
        private readonly TrackYourStudyContext _dbContext;
        private bool disposedValue;

        public SubjectRepository(TrackYourStudyContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void CreateSubjects(IEnumerable<Subject> subjects)
        {
            foreach (var subject in subjects)
            {
                _dbContext.Subjects.Add(subject);
            }

            _dbContext.SaveChanges();
        }

        public Subject GetSubject(int id)
        {   
            //TODO : (msercan)subject Id var mı diye kontrol edilecek mi ?
            return _dbContext.Subjects.Where(subject => subject.Id == id).First();
        }

        public List<Subject> GetSubjects()
        {
            //TODO : (msercan) kullanıcının durumuna göre yalnızca ilgili dersler çekilecek.
            return _dbContext.Subjects.ToList();
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
        // ~SubjectRepository()
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
