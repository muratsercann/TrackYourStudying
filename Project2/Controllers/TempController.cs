using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TempController : Controller
    {
        private readonly ITempRepo _subjectService;
        public TempController(ITempRepo repo)
        {
            //var repo = new SubjectRepository(new TrackYourStudyContext());
            _subjectService = repo;
        }

        [HttpGet]
        public IEnumerable<DbManagement.Models.Subject> Get()
        {
            return _subjectService.GetSubjects(); ;
        }
    }
}
