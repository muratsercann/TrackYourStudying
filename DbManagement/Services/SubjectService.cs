using DbManagement.Models;
using DbManagement.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Services
{
    public class SubjectService
    {
        private readonly ISubjectRepository _subjectRepository;

        public SubjectService(ISubjectRepository subjectRepository)
        {
            _subjectRepository = subjectRepository ?? throw new ArgumentNullException(nameof(subjectRepository));
        }

        public IEnumerable<Subject> GetSubjects()
        {
            return _subjectRepository.GetSubjects();
        }

        public IEnumerable<Subject> GetSubjects(string username)
        {
            return _subjectRepository.GetSubjects(username);
        }

        public Subject GetSubject(int id)
        {
            return _subjectRepository.GetSubject(id);
        }
    }
}
