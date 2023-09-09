using DbManagement;
using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.Models;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudySessionController : ControllerBase
    {
        
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

        [HttpDelete("DeleteSession/{id}")]
        public IActionResult DeleteSession(int id)
        {
            //List<StudySession> sessions = GetStudySessions();
            using var db = new TrackYourStudyContext();
            bool result = db.DeleteSession(id);

            if (!result || db.StudySessions.Where(s => s.Id == 1).Any())
            {
                return BadRequest($"Cannot delete session with id : {id}");
            }
            return Ok($"Deleted session with id : {id}");
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


        /// <summary>
        /// session güncelleme için kullanılır
        /// </summary>
        /// <param name="id"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult UpdateData(int id, [FromBody] FormData formData)
        {
            using var db = new TrackYourStudyContext();
            
            if (!db.StudySessions.Where(s => s.Id == id).Any())
            {
                return NotFound(new { error = $"Güncelleme yapabilmek için  - ID = {id} - olan bir session bilgisi bulunamadı !" });
            }

            DbManagement.Models.StudySession session = db.StudySessions.Where(s => s.Id == id).First();

            session.Date = formData.Date;
            session.StartTime = formData.StartTime;
            session.EndTime = formData.EndTime;
            session.SubjectId = formData.SubjectId;
            session.TopicId = formData.TopicId;
            session.SolvedQuestions = formData.SolvedQuestions;
            session.DidTopicStudy = formData.DidTopicStudy;

            db.SaveChanges();
            return Ok(new { message = "Güncelleme başarılı." });
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

