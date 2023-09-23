using DbManagement.Repositories;
using Microsoft.AspNetCore.Mvc;
using DbManagement.Services;
using Microsoft.AspNetCore.Authorization;
using DbManagement.Models;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController : ControllerBase
    {
        private readonly SubjectService _subjectService;

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

        public SubjectController(ISubjectRepository repo)
        {
            _subjectService = new SubjectService(repo);
        }
        [HttpGet("allsubjects")]
        [Authorize]
        public IEnumerable<DbManagement.Models.Subject> GetAllSubjects()
        {
            try
            {
                string username = getUsername(HttpContext);

                if (username == "admin")
                {
                    return _subjectService.GetSubjects(username);
                }

                return new List<Subject>() { };
            }
            catch (Exception)
            {
                throw;
            }

        }


        [HttpGet]
        [Authorize]
        public IEnumerable<DbManagement.Models.Subject> Get()
        {
            try
            {
                string username = getUsername(HttpContext);
                return _subjectService.GetSubjects(username);
            }
            catch (Exception)
            {
                throw;
            }

        }

    }

}
