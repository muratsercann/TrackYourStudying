namespace TrackYourStudyingApp.Models
{
    public class SessionByDate
    {

        public DateTime Date { get; set; }
        public string? TotalSolvedQuestion { get { return calcTotalSolvedQuestion(); } }
        public string? TotalDuration { get { return calcTotalDuration(); } }
        public List<StudySession>? Sessions { get; set; }

        private string calcTotalSolvedQuestion()
        {
            int total = 0;
            if (this.Sessions == null || this.Sessions.Count == 0)
            {
                return "";
            }

            foreach (StudySession item in this.Sessions)
            {
                total += item.SolvedQuestions;
            }
            return total.ToString() + "Soru";
        }

        private string calcTotalDuration()
        {
            if (this.Sessions == null || this.Sessions.Count == 0)
            {
                return "";
            }

            int minutes = 0;

            foreach (StudySession item in this.Sessions)
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
