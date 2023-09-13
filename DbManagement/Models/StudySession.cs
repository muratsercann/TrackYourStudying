using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class StudySession
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }

        [MaxLength(5)]
        public string? StartTime { get; set; }

        [MaxLength(5)]
        public string? EndTime { get; set; }
        public int? SubjectId { get; set; } //Ders Adı
        public int? TopicId { get; set; } //Ders konusu
        public int SolvedQuestions { get; set; }
        public bool DidTopicStudy { get; set; }

        [MaxLength(1000)]
        public string? Description { get; set; }
        public Topic? Topic { get; set; }

        public Subject? Subject { get; set; }

        [NotMapped]
        public int StudyDurationMinutes
        {
            get
            {
                if (string.IsNullOrEmpty(StartTime) || string.IsNullOrEmpty(EndTime))
                {
                    return 0;
                }

                TimeSpan fark = CalculateTime(StartTime, EndTime);
                return (int)fark.TotalMinutes;
            }
        }

        [NotMapped]
        public string StudyDurationString
        {
            get
            {
                if (string.IsNullOrEmpty(StartTime) || string.IsNullOrEmpty(EndTime))
                {
                    return "";
                }

                return ConvertMinutesToHours(StudyDurationMinutes);
            }
        }
        private string ConvertMinutesToHours(int minutes)
        {
            string result = "";
            int hours = minutes / 60;
            int minutesRemaining = minutes % 60;
            if (hours > 0)
            {
                result = $"{hours}sa";
            }

            result += $"{minutesRemaining}dk";


            return result;
        }

        private TimeSpan CalculateTime(string time1, string time2)
        {
            TimeSpan t1 = TimeSpan.Parse(time1);
            TimeSpan t2 = TimeSpan.Parse(time2);

            //Ör: t1 = 23:30, t2 00:45 ikinci saate bir gün ekleyerek eksi değer çıkması engelleniyor.
            if (t1 > t2)
            {
                t2 = t2.Add(new TimeSpan(24, 0, 0));
            }

            // Farkı hesaplayın
            TimeSpan fark = t2 - t1;
            return fark;
        }

    }

}
