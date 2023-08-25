using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.Models;

namespace TrackYourStudyingApp.Controllers
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

        private List<SessionByDate> GetSessionByDateList()
        {
            List<SessionByDate> sessionList = new List<SessionByDate>
            {
                new SessionByDate
                {
                    Date = DateTime.Parse("2023-08-25"),
                    Sessions = new List<StudySession>
                    {
                        new StudySession
                        {
                            Id = 1,
                            StartTime = "13:00",
                            EndTime = "15:00",
                            Subject = "Math",
                            Topic = "Equation Solving",
                            StudyDuration = 120
                        },
                        new StudySession
                        {
                            Id = 2,
                            StartTime = "16:00",
                            EndTime = "18:00",
                            Subject = "Physics",
                            Topic = "Mechanics",
                            StudyDuration = 120
                        },
                        new StudySession
                        {
                            Id = 3,
                            StartTime = "19:30",
                            EndTime = "20:30",
                            Subject = "English",
                            Topic = "Literary Analysis",
                            StudyDuration = 60
                        }
                    }
                },
                new SessionByDate
                {
                    Date = DateTime.Parse("2023-08-26"),
                    Sessions = new List<StudySession>
                    {
                        new StudySession
                        {
                            Id = 4,
                            StartTime = "10:00",
                            EndTime = "12:00",
                            Subject = "Biology",
                            Topic = "Cell Biology",
                            StudyDuration = 120
                        },
                        new StudySession
                        {
                            Id = 5,
                            StartTime = "14:00",
                            EndTime = "15:30",
                            Subject = "History",
                            Topic = "Ancient Civilizations",
                            StudyDuration = 90
                        },
                        new StudySession
                        {
                            Id = 6,
                            StartTime = "16:30",
                            EndTime = "18:00",
                            Subject = "Chemistry",
                            Topic = "Chemical Bonding",
                            StudyDuration = 90
                        }
                    }
                },
                new SessionByDate
                {
                    Date = DateTime.Parse("2023-08-27"),
                    Sessions = new List<StudySession>
                    {
                        new StudySession
                        {
                            Id = 7,
                            StartTime = "11:30",
                            EndTime = "13:00",
                            Subject = "Math",
                            Topic = "Trigonometry",
                            StudyDuration = 90
                        },
                        new StudySession
                        {
                            Id = 8,
                            StartTime = "14:30",
                            EndTime = "15:30",
                            Subject = "Literature",
                            Topic = "Poetry Analysis",
                            StudyDuration = 60
                        },
                        new StudySession
                        {
                            Id = 9,
                            StartTime = "17:00",
                            EndTime = "18:30",
                            Subject = "Physics",
                            Topic = "Optics",
                            StudyDuration = 90
                        }
                    }
                },
                new SessionByDate
                {
                    Date = DateTime.Parse("2023-08-28"),
                    Sessions = new List<StudySession>
                    {
                        new StudySession
                        {
                            Id = 10,
                            StartTime = "10:00",
                            EndTime = "12:00",
                            Subject = "Chemistry",
                            Topic = "Acids and Bases",
                            StudyDuration = 120
                        },
                        new StudySession
                        {
                            Id = 11,
                            StartTime = "14:00",
                            EndTime = "15:30",
                            Subject = "History",
                            Topic = "Modern World",
                            StudyDuration = 90
                        },
                        new StudySession
                        {
                            Id = 12,
                            StartTime = "16:30",
                            EndTime = "18:00",
                            Subject = "Biology",
                            Topic = "Genetics",
                            StudyDuration = 90
                        }
                    }
                },
                new SessionByDate
                {
                    Date = DateTime.Parse("2023-08-29"),
                    Sessions = new List<StudySession>
                    {
                        new StudySession
                        {
                            Id = 13,
                            StartTime = "11:30",
                            EndTime = "13:00",
                            Subject = "Math",
                            Topic = "Calculus",
                            StudyDuration = 90
                        },
                        new StudySession
                        {
                            Id = 14,
                            StartTime = "14:30",
                            EndTime = "15:30",
                            Subject = "Literature",
                            Topic = "Shakespeare",
                            StudyDuration = 60
                        },
                        new StudySession
                        {
                            Id = 15,
                            StartTime = "17:00",
                            EndTime = "18:30",
                            Subject = "Physics",
                            Topic = "Thermodynamics",
                            StudyDuration = 90
                        }
                    }
                }
            };

            return sessionList;
        }

        [HttpGet]
        public IEnumerable<SessionByDate> Get()
        {
            //List<StudySession> sessions = GetStudySessions();
            List<SessionByDate> sessions = GetSessionByDateList();
            return sessions;
        }
    }
}
