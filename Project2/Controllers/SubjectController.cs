using DbManagement.Repositories;
using Microsoft.AspNetCore.Mvc;
using DbManagement.Services;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController
    {
        private readonly SubjectService _subjectService;

        public SubjectController()
        {
            var repo = new SubjectRepository(new TrackYourStudyContext());
            _subjectService = new SubjectService(repo);
        }

        [HttpGet]
        public IEnumerable<DbManagement.Models.Subject> Get()
        {
            return _subjectService.GetSubjects(); ;
        }

    }
    
}
