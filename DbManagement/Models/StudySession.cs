using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class StudySession
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string? StartTime { get; set; }
        public string? EndTime { get; set; }
        public string? Subject { get; set; } //Ders Adı
        public string? Topic { get; set; } //Ders konusu
        public int StudyDuration { get; set; }
        public int SolvedQuestions { get; set; }
        public bool DidTopicStudy { get; set; }
    }

}
