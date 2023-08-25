using Microsoft.AspNetCore.Mvc;
using Project2.Models;

namespace Project2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudySessionController : ControllerBase
    {

        private List<StudySession> GetStudySessions()
        {
            List<StudySession> sessions = new List<StudySession>();

            sessions.Add(new StudySession
            {
                Id = 1,
                Date = DateTime.Today,
                StartTime = "09:00",
                EndTime = "11:00",
                Subject = "Mathematics",
                Topic = "Trigonometry",
                StudyDuration = 120,
                SolvedQuestions = 20,
                DidTopicStudy = true
            });

            sessions.Add(new StudySession
            {
                Id = 2,
                Date = DateTime.Today,
                StartTime = "12:00",
                EndTime = "14:00",
                Subject = "Physics",
                Topic = "Motion and Force",
                StudyDuration = 120,
                SolvedQuestions = 15,
                DidTopicStudy = false
            });

            sessions.Add(new StudySession
            {
                Id = 3,
                Date = DateTime.Today.AddDays(-1),
                StartTime = "10:30",
                EndTime = "12:30",
                Subject = "Chemistry",
                Topic = "Elements and Periodic Table",
                StudyDuration = 120,
                SolvedQuestions = 25,
                DidTopicStudy = true
            });

            sessions.Add(new StudySession
            {
                Id = 4,
                Date = DateTime.Today.AddDays(-1),
                StartTime = "14:00",
                EndTime = "16:00",
                Subject = "Literature",
                Topic = "Analysis of Novels",
                StudyDuration = 120,
                SolvedQuestions = 10,
                DidTopicStudy = false
            });

            sessions.Add(new StudySession
            {
                Id = 5,
                Date = DateTime.Today.AddDays(-2),
                StartTime = "09:30",
                EndTime = "11:30",
                Subject = "Biology",
                Topic = "Cell Division",
                StudyDuration = 120,
                SolvedQuestions = 30,
                DidTopicStudy = true
            });

            sessions.Add(new StudySession
            {
                Id = 6,
                Date = DateTime.Today.AddDays(-2),
                StartTime = "13:00",
                EndTime = "15:00",
                Subject = "History",
                Topic = "Medieval Europe",
                StudyDuration = 120,
                SolvedQuestions = 18,
                DidTopicStudy = false
            });

            return sessions;
        }

        [HttpGet]
        public IEnumerable<StudySession> Get()
        {
            List<StudySession> sessions = GetStudySessions();
            return sessions;
        }
    }
}
