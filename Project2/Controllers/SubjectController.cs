using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;
using TrackYourStudyingApp.Models;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController
    {
        [HttpGet]
        public IEnumerable<DbManagement.Models.Subject> Get()
        {
            using var db = new TrackYourStudyContext();
            return db.GetSubjects();
        }

    }


    [ApiController]
    [Route("[controller]")]
    public class TopicController
    {
        [HttpGet()]
        public IEnumerable<DbManagement.Models.Topic> Get()
        {
            using var db = new TrackYourStudyContext();
            return db.GetTopics();
        }

        [HttpGet("GetTopicsBySubjectId/{subjectId}")]
        public IEnumerable<DbManagement.Models.Topic> GetTopicsBySubjectId(int subjectId)
        {
            using var db = new TrackYourStudyContext();
            return db.GetTopics(subjectId);
        }

    }
}
