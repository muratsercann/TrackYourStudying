using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public interface ISubjectRepository
    {
        List<Subject> GetSubjects();
        Subject GetSubject(int id);

        void CreateSubjects(IEnumerable<Subject> subjects);
    }
}
