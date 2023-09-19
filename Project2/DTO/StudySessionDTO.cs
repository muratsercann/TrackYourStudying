namespace TrackYourStudyingApp.DTO
{
    public class StudySessionDTO
    {
        public DateTime Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int? SubjectId { get; set; }
        public int? TopicId { get; set; }
        public int StudyDuration { get; set; }
        public int SolvedQuestions { get; set; }
        public bool DidTopicStudy { get; set; }

        public int Correct { get; set; }

        public int InCorrect { get; set; }
        public int UnAnswered { get; set; }


    }
}
