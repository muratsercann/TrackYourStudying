namespace TrackYourStudyingApp.Models
{
    public class SessionByDate
    {
        public DateTime Date { get; set; }
        public List<StudySession>? Sessions { get; set; }
    }
}
