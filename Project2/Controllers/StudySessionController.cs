using DbManagement;
using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.Models;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudySessionController : ControllerBase
    {
        
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
                            Date = DateTime.Parse("2023-08-25"),
                            StartTime = "13:00",
                            EndTime = "15:00",
                            Subject = "Math",
                            Topic = "Equation Solving",
                            StudyDuration = 120,
                            DidTopicStudy = true,
                            SolvedQuestions = 50,
                        },
                        new StudySession
                        {
                            Id = 2,
                            Date = DateTime.Parse("2023-08-25"),
                            StartTime = "16:00",
                            EndTime = "18:00",
                            Subject = "Physics",
                            Topic = "Mechanics",
                            StudyDuration = 120,
                            SolvedQuestions = 35,
                        },
                        new StudySession
                        {
                            Id = 3,
                            Date = DateTime.Parse("2023-08-25"),
                            StartTime = "19:30",
                            EndTime = "20:30",
                            Subject = "English",
                            Topic = "Literary Analysis",
                            StudyDuration = 60,
                            SolvedQuestions = 75,
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
                            Date = DateTime.Parse("2023-08-26"),
                            StartTime = "10:00",
                            EndTime = "12:00",
                            Subject = "Biology",
                            Topic = "Cell Biology",
                            StudyDuration = 120,
                            SolvedQuestions = 58,
                        },
                        new StudySession
                        {
                            Id = 5,
                            Date = DateTime.Parse("2023-08-26"),
                            StartTime = "14:00",
                            EndTime = "15:30",
                            Subject = "History",
                            Topic = "Ancient Civilizations",
                            StudyDuration = 90,
                            DidTopicStudy = true,
                            SolvedQuestions = 85
                        },
                        new StudySession
                        {
                            Id = 6,
                            Date = DateTime.Parse("2023-08-26"),
                            StartTime = "16:30",
                            EndTime = "18:00",
                            Subject = "Chemistry",
                            Topic = "Chemical Bonding",
                            StudyDuration = 90,
                            SolvedQuestions = 35,
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
                            Date = DateTime.Parse("2023-08-27"),
                            StartTime = "11:30",
                            EndTime = "13:00",
                            Subject = "Math",
                            Topic = "Trigonometry",
                            StudyDuration = 90,
                            DidTopicStudy = true,
                            SolvedQuestions = 75,
                        },
                        new StudySession
                        {
                            Id = 8,
                            Date = DateTime.Parse("2023-08-27"),
                            StartTime = "14:30",
                            EndTime = "15:30",
                            Subject = "Literature",
                            Topic = "Poetry Analysis",
                            StudyDuration = 60,
                            SolvedQuestions = 58,
                        },
                        new StudySession
                        {
                            Id = 9,
                            Date = DateTime.Parse("2023-08-27"),
                            StartTime = "17:00",
                            EndTime = "18:30",
                            Subject = "Physics",
                            Topic = "Optics",
                            StudyDuration = 90,
                            DidTopicStudy = true,
                            SolvedQuestions = 65,
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
                            Date = DateTime.Parse("2023-08-28"),
                            StartTime = "10:00",
                            EndTime = "12:00",
                            Subject = "Chemistry",
                            Topic = "Acids and Bases",
                            StudyDuration = 120,
                            SolvedQuestions = 40,
                        },
                        new StudySession
                        {
                            Id = 11,
                            Date = DateTime.Parse("2023-08-28"),
                            StartTime = "14:00",
                            EndTime = "15:30",
                            Subject = "History",
                            Topic = "Modern World",
                            StudyDuration = 90,
                            DidTopicStudy = true,
                            SolvedQuestions = 30,
                        },
                        new StudySession
                        {
                            Id = 12,
                            Date = DateTime.Parse("2023-08-28"),
                            StartTime = "16:30",
                            EndTime = "18:00",
                            Subject = "Biology",
                            Topic = "Genetics",
                            StudyDuration = 90,
                            DidTopicStudy = true,
                            SolvedQuestions = 43,
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
                            Date = DateTime.Parse("2023-08-29"),
                            StartTime = "11:30",
                            EndTime = "13:00",
                            Subject = "Math",
                            Topic = "Calculus",
                            StudyDuration = 90,
                            SolvedQuestions = 78,
                        },
                        new StudySession
                        {
                            Id = 14,
                            Date = DateTime.Parse("2023-08-29"),
                            StartTime = "14:30",
                            EndTime = "15:30",
                            Subject = "Literature",
                            Topic = "Shakespeare",
                            StudyDuration = 60,
                            SolvedQuestions = 20,
                        },
                        new StudySession
                        {
                            Id = 15,
                            Date = DateTime.Parse("2023-08-29"),
                            StartTime = "17:00",
                            EndTime = "18:30",
                            Subject = "Physics",
                            Topic = "Thermodynamics",
                            StudyDuration = 90,
                            SolvedQuestions = 35,
                        }
                    }
                }
            };

            return sessionList;
        }


        /// <summary>
        /// Hangi tarihte hangi derslerin çalışıldığı bilgisini sunar
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<StudySessionByDate> Get()
        {
            //List<StudySession> sessions = GetStudySessions();
            using var db = new TrackYourStudyContext();
            List<StudySessionByDate> sessions = db.GetStudySessionsByDate();
            return sessions;
        }


        /// <summary>
        /// Yeni çalışmayı veritabanına kaydeder.
        /// </summary>
        /// <param name="formData"></param>
        /// <returns></returns>
        [HttpPost("addNewSession")]
        public IActionResult AddNewSession([FromBody] FormData formData)
        {
            try
            {
                DbManagement.Models.StudySession session = new DbManagement.Models.StudySession();

                session.Date = formData.Date;
                session.StartTime = formData.StartTime;
                session.EndTime = formData.EndTime;
                session.SubjectId =  formData.SubjectId;
                session.TopicId = formData.TopicId;
                session.SolvedQuestions = formData.SolvedQuestions;
                session.DidTopicStudy = formData.DidTopicStudy;

                TrackYourStudyContext.CreateSession(session);

                //veritabanı kayıt işlemleri
                // Başarılı yanıt
                return Ok(new { message = "Veriler başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                // Hata durumu
                return BadRequest(new { error = "Bir hata oluştu: " + ex.Message });
            }
        }

        public class FormData
        {
            public DateTime Date { get; set; }
            public string? StartTime { get; set; }
            public string? EndTime { get; set; }
            public int? SubjectId { get; set; }
            public int? TopicId { get; set; }
            public int StudyDuration { get; set; }
            public int SolvedQuestions { get; set; }
            public bool DidTopicStudy { get; set; }
        }
    }
}

