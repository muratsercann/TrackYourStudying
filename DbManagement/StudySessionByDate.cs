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
        public string? TotalSolvedQuestion { get { return calcTotalSolvedQuestion(); } }
        public string? TotalDuration { get { return calcTotalDuration(); } }
        public List<StudySession>? Sessions { get; set; }

        private string calcTotalSolvedQuestion()
        {
            int total = 0;
            if (Sessions == null || Sessions.Count == 0)
            {
                return "";
            }

            foreach (StudySession item in Sessions)
            {
                total += item.SolvedQuestions;
            }
            return total.ToString() + " Soru";
        }

        private string calcTotalDuration()
        {
            if (Sessions == null || Sessions.Count == 0)
            {
                return "";
            }

            int minutes = 0;

            foreach (StudySession item in Sessions)
            {
                minutes += item.StudyDuration;
            }

            string result = ConvertMinutesToHours(minutes);

            return result;
        }

        private string ConvertMinutesToHours(int minutes)
        {
            int hours = minutes / 60;
            int minutesRemaining = minutes % 60;
            return $"{hours}sa {minutesRemaining}dk";
        }
    }
}
