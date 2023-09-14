using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class ChartsDataModel
    {
        public List<DateStudyDuration> DateStudyDurations = new List<DateStudyDuration>();
        public List<DateSolvedQuestions> DateSolvedQuestions = new List<DateSolvedQuestions>();
        public List<SubjectDuration> SubjectDurations = new List<SubjectDuration>();
        public List<SubjectSolvedQuestions> SubjectSolvedQuestionss = new List<SubjectSolvedQuestions>();
    }

    public class DateStudyDuration
    {
        public DateTime Date { get; set; }
        public int StudyDurationMinutes;
    }
    public class DateSolvedQuestions
    {
        public DateTime Date { get; set; }
        public int SolvedQuestion { get; set; }
    }

    public class SubjectDuration
    {
        public string SubjectName { get; set; }
        public int StudyDurationMinutes { get; set; }
    }

    public class SubjectSolvedQuestions
    {
        public string SubjectName { get; set; }
        public int SolvedQuestions { get; set; }
    }
}
