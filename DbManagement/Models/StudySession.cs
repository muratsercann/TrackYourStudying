using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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
        public int SolvedQuestions { get; set; }
        public bool DidTopicStudy { get; set; }
        public string? Description { get; set; }

        [NotMapped]
        public int StudyDuration
        {
            get
            {
                if (string.IsNullOrEmpty(StartTime) || string.IsNullOrEmpty(EndTime))
                {
                    return 0;
                }
                DateTime tarih1 = DateTime.ParseExact(StartTime!, "HH:mm", null);
                DateTime tarih2 = DateTime.ParseExact(EndTime!, "HH:mm", null);

                // Farkı hesaplayın
                TimeSpan fark = tarih2 - tarih1;
                return (int)fark.TotalMinutes;
            }
        }


    }

}
