namespace TrackYourStudyingApp.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public List<Topic>? Topics { get; set; }
    }
}
