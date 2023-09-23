using DbManagement;
using DbManagement.Models;
using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using System.Collections;
using System.Linq.Expressions;
using System.Text.Json;
using System.Text.Json.Nodes;
using TrackYourStudyingApp.DTO;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudySessionController : ControllerBase
    {
        private IConfiguration? _config;
        private readonly SessionService _sessionService;

        private string getUsername(HttpContext? httpContext)
        {
            try
            {
                if (httpContext?.User != null)
                {
                    return httpContext.User.Claims.ToList().First(x => x.Type == "UserName").Value;
                }

                return string.Empty;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        public StudySessionController(IConfiguration config, ISessionRepository repo)
        {
            try
            {
                _sessionService = new SessionService(repo);
                _config = config;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<StudySessionByDate> Get(CancellationToken cancellationToken)
        {
            try
            {
                string username = getUsername(HttpContext);
                return _sessionService.GetStudySessionsByDate(username);
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        #region Charts Api
        /// <summary>
        /// Hangi tarihte hangi derslerin çalışıldığı bilgisini sunar
        /// </summary>
        /// <returns></returns>

        [HttpGet("GetDateStudyDurationStatistic")]
        [Authorize]
        public IEnumerable<DateStudyDuration> GetDateStudyDurationStatistic()
        {
            try
            {
                string username = getUsername(HttpContext);
                var data = _sessionService.GetDateStudyDurationStatistic(username);
                return data;
            }
            catch (Exception)
            {
                throw;
            }

        }

        [HttpGet("GetDateSolvedQuestionsStatistic")]
        [Authorize]
        public IEnumerable<DateSolvedQuestions> GetDateSolvedQuestionsStatistic()
        {
            try
            {
                string username = getUsername(HttpContext);
                var data = _sessionService.GetDateSolvedQuestionsStatistic(username);
                return data;
            }
            catch (Exception)
            {
                throw;
            }

        }

        [HttpGet("GetSubjectDurationStatistic")]
        [Authorize]
        public IEnumerable<SubjectDuration> GetSubjectDurationStatistic()
        {
            try
            {
                string username = getUsername(HttpContext);
                var data = _sessionService.GetSubjectDurationStatistic(username);
                return data;
            }
            catch (Exception)
            {
                throw;
            }

        }


        [HttpGet("GetSubjectSolvedQuestionsStatistic")]
        [Authorize]
        public IEnumerable<SubjectSolvedQuestions> GetSubjectSolvedQuestionsStatistic()
        {
            try
            {
                string username = getUsername(HttpContext);
                var data = _sessionService.GetSubjectSolvedQuestionsStatistic(username);
                return data;
            }
            catch (Exception)
            {
                throw;
            }

        }

        #endregion Charts Api

        [HttpDelete("DeleteSession/{id}")]
        [Authorize]
        public IActionResult DeleteSession(int id, CancellationToken cancellationToken)
        {
            try
            {
                string username = getUsername(HttpContext);

                if (!_sessionService.Any(id, username))
                {
                    return BadRequest($"Kullanıcı adı : {username} olan böyle bir çalışma kaydı bulunamadı !");
                }

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
            catch (Exception ex)
            {
                return BadRequest($"Bir hata oluştu: {ex}");
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
        [Authorize]
        public IActionResult AddNewSession([FromBody] StudySessionDTO formData, CancellationToken cancellationToken)
        {
            try
            {
                string username = getUsername(HttpContext);

                StudySession session = new StudySession();
                session.UserName = username;
                session.Date = formData.Date.Date;
                session.StartTime = formData.StartTime;
                session.EndTime = formData.EndTime;
                session.SubjectId = formData.SubjectId == 0 ? null : formData.SubjectId;
                session.TopicId = formData.TopicId == 0 ? null : formData.TopicId;
                session.SolvedQuestions = formData.SolvedQuestions;
                session.Correct = formData.Correct;
                session.InCorrect = formData.InCorrect;
                session.UnAnswered = formData.UnAnswered;
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
                return BadRequest($"Bir hata oluştu: {ex}");
            }
        }


        /// <summary>
        /// session güncelleme için kullanılır
        /// </summary>
        /// <param name="id"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Update(int id, [FromBody] StudySessionDTO formData, CancellationToken cancellationToken)
        {
            try
            {
                string username = getUsername(HttpContext);
                if (!_sessionService.Any(id, username))
                {
                    return NotFound(new { error = $"Güncelleme yapabilmek için {username} kullanıcısına ait - ID = {id} - olan bir çalışma kaydı bulunamadı !" });
                }

                StudySession session = _sessionService.GetSession(id);
                session.UserName = username;
                session.Date = formData.Date;
                session.StartTime = formData.StartTime;
                session.EndTime = formData.EndTime;
                session.SubjectId = formData.SubjectId == 0 ? null : formData.SubjectId;
                session.TopicId = formData.TopicId == 0 ? null : formData.TopicId;
                session.SolvedQuestions = formData.SolvedQuestions;
                session.Correct = formData.Correct;
                session.InCorrect = formData.InCorrect;
                session.UnAnswered = formData.UnAnswered;
                session.DidTopicStudy = formData.DidTopicStudy;
                session.StudyDurationMinutes = CalculateMinutes(formData.StartTime, formData.EndTime);

                _sessionService.UpdateSession(session);

                return Ok(new { message = "Güncelleme başarılı." });
            }
            catch (Exception ex)
            {
                return BadRequest($"Bir hata oluştu: {ex}");
            }
        }


    }
}

