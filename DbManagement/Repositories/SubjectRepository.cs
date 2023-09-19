using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class SubjectRepository : ISubjectRepository
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

       
    }
}
