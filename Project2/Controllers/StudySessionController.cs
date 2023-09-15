using DbManagement;
using DbManagement.Models;
using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using System.Collections;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudySessionController : ControllerBase
    {

        private readonly SessionService _sessionService;

        public StudySessionController()
        {
            var repo = new SessionRepository(new TrackYourStudyContext());
            _sessionService = new SessionService(repo);
        }


        /// <summary>
        /// Hangi tarihte hangi derslerin çalışıldığı bilgisini sunar
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<StudySessionByDate> Get()
        {
            return _sessionService.GetStudySessionsByDate();
        }

        [HttpGet("GetDateStudyDurationStatistic")]
        public IEnumerable<DateStudyDuration> GetDateStudyDurationStatistic()
        {
            var data = _sessionService.GetDateStudyDurationStatistic();
            return data;
        }

        [HttpGet("GetDateSolvedQuestionsStatistic")]
        public IEnumerable<DateSolvedQuestions> GetDateSolvedQuestionsStatistic()
        {
            var data = _sessionService.GetDateSolvedQuestionsStatistic();
            return data;
        }

        [HttpGet("GetSubjectDurationStatistic")]
        public IEnumerable<SubjectDuration> GetSubjectDurationStatistic()
        {
            var data = _sessionService.GetSubjectDurationStatistic();
            return data;
        }


        [HttpGet("GetSubjectSolvedQuestionsStatistic")]
        public IEnumerable<SubjectSolvedQuestions> GetSubjectSolvedQuestionsStatistic()
        {
            var data = _sessionService.GetSubjectSolvedQuestionsStatistic();
            return data;
        }

        [HttpDelete("DeleteSession/{id}")]
        public IActionResult DeleteSession(int id)
        {
            bool result = _sessionService.DeleteSession(id);

            if (result)// if (!result || db.StudySessions.Where(s => s.Id == 1).Any())
            {
                return Ok($"Deleted session with id : {id}");
            }
            else
            {
                return BadRequest($"Cannot delete session with id : {id}");
            }
        }

        private int CalculateMinutes(string time1, string time2)
        {
            int minutes = 0;

            if (string.IsNullOrEmpty(time1) || string.IsNullOrEmpty(time2))
            {
                return 0;
            }

            TimeSpan t1 = TimeSpan.Parse(time1);
            TimeSpan t2 = TimeSpan.Parse(time2);

            //Ör: t1 = 23:30, t2 00:45 ikinci saate bir gün ekleyerek eksi değer çıkması engelleniyor.
            if (t1 > t2)
            {
                t2 = t2.Add(new TimeSpan(24, 0, 0));
            }

            // Farkı hesaplayın
            TimeSpan fark = t2 - t1;
            return (int)fark.TotalMinutes;
        }

        /// <summary>
        /// Yeni çalışmayı veritabanına kaydeder.
        /// </summary>
        /// <param name="formData"></param>
        /// <returns></returns>
        [HttpPost("addNewSession")]
        public IActionResult AddNewSession([FromBody] StudySessionDTO formData)
        {
            try
            {
                StudySession session = new StudySession();

                session.Date = formData.Date.Date;
                session.StartTime = formData.StartTime;
                session.EndTime = formData.EndTime;
                session.SubjectId = formData.SubjectId;
                session.TopicId = formData.TopicId;
                session.SolvedQuestions = formData.SolvedQuestions;
                session.DidTopicStudy = formData.DidTopicStudy;
                session.StudyDurationMinutes = CalculateMinutes(formData.StartTime, formData.EndTime);
                _sessionService.CreateSession(session);

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


        /// <summary>
        /// session güncelleme için kullanılır
        /// </summary>
        /// <param name="id"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] StudySessionDTO formData)
        {
            if (!_sessionService.Any(id))
            {
                return NotFound(new { error = $"Güncelleme yapabilmek için  - ID = {id} - olan bir session bilgisi bulunamadı !" });
            }

            StudySession session = _sessionService.GetSession(id);

            session.Date = formData.Date;
            session.StartTime = formData.StartTime;
            session.EndTime = formData.EndTime;
            session.SubjectId = formData.SubjectId;
            session.TopicId = formData.TopicId;
            session.SolvedQuestions = formData.SolvedQuestions;
            session.DidTopicStudy = formData.DidTopicStudy;
            session.StudyDurationMinutes = CalculateMinutes(formData.StartTime, formData.EndTime);

            _sessionService.UpdateSession(session);

            return Ok(new { message = "Güncelleme başarılı." });
        }

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

        }
    }
}

