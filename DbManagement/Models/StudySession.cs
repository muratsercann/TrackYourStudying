using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
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

                return ConvertMinutesToHours(StudyDuration);
            }
        }
        private string ConvertMinutesToHours(int minutes)
        {
            int hours = minutes / 60;
            int minutesRemaining = minutes % 60;
            return $"{hours}sa {minutesRemaining}dk";
        }

        private TimeSpan CalculateTime(string time1, string time2)
        {
            DateTime tarih1 = DateTime.ParseExact(time1!, "HH:mm", null);
            DateTime tarih2 = DateTime.ParseExact(time2!, "HH:mm", null);

            // Farkı hesaplayın
            TimeSpan fark = tarih2 - tarih1;
            return fark;
        }

    }

}
