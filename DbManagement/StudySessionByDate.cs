using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DbManagement.Models;

namespace DbManagement
{
    public class StudySessionByDate
    {

        public DateTime Date { get; set; }
        public int? TotalSolvedQuestion { get; set; }
        public int? TotalDurationMinutes { get; set; }
        public List<StudySession>? Sessions { get; set; }
    }
}
