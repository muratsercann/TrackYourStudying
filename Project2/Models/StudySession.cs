namespace TrackYourStudyingApp.Models
{
    public class StudySession
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Subject { get; set; }
        public string Topic { get; set; }
        public int StudyDuration { get; set; }
        public int SolvedQuestions { get; set; }
        public bool DidTopicStudy { get; set; }
    }
}
