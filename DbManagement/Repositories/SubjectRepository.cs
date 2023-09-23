using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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
            return _dbContext.Subjects.ToList();
        }

        public List<Subject> GetSubjects(string username)
        {
            User user = _dbContext.Users.First(user => user.Username == username);

            string alan1 = string.Empty;
            string alan2 = string.Empty;
            if (user.ExamType == "YKS")
            {
                alan1 = "TYT";

                switch (user.ExamSubType)
                {
                    case "SAY":
                        alan2 = "AYTSAY";
                        break;
                    case "EA":
                        alan2 = "ATYEA";
                        break;
                    case "SOZ":
                        alan2 = "AYTSOZ";
                        break;
                    case "DIL":
                        alan2 = "AYTDIL";
                        break;
                    default:
                        break;
                }
            }

            else if (user.ExamType == "LGS")
            {
                alan1 = "LGS";
            }

            var query = _dbContext.Subjects.Where(subject => subject.Type == alan1);

            if (!string.IsNullOrEmpty(alan2))
            {
                query = _dbContext.Subjects.Where(subject => subject.Type == alan1 || subject.Type == alan2);
            }

            var result = query.Select(s => s).ToList();

            return result;
        }


    }
}
