using DbManagement;
using DbManagement.Migrations;
using DbManagement.Models;
using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.DTO;

namespace TrackYourStudyingApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly SessionService _sessionService;
        
        public TestController(ISessionRepository repo)
        {
            _sessionService = new SessionService(repo);           
        }

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


        [HttpGet("sessions")]
        [Authorize]
        public IEnumerable<StudySessionByDate> Get()
        {
            return _sessionService.GetStudySessionsByDate();
        }

        [Authorize]
        [HttpPost("loginpost")]
        public IActionResult Loginpost([FromBody] LoginResourceDTO resource)
        {
            return Ok("Login2 başarılı");
        }

        [HttpGet("loginget")]
        [Authorize]
        public IActionResult Loginget([FromBody] LoginResourceDTO resource)
        {
            string username = getUsername(HttpContext);
            return Ok($"Login2 başarılı username : {username}");
        }

        [HttpGet("chartdata")]
        [Authorize]
        public ActionResult<ChartsDataModel> ChartData()
        {
            string username = getUsername(HttpContext);
            return _sessionService.GetChartsData(username);
        }


    }
}
