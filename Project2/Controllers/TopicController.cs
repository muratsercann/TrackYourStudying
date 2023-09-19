using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicController
    {
        private readonly TopicService _topicService;

        public TopicController(ITopicRepository repo)
        {
            _topicService = new TopicService(repo);
        }

        [HttpGet()]
        public IEnumerable<DbManagement.Models.Topic> Get()
        {
            return _topicService.GetTopics();
        }

        [HttpGet("GetTopicsBySubjectId/{subjectId}")]
        public IEnumerable<DbManagement.Models.Topic> GetTopicsBySubjectId(int subjectId)
        {
            return _topicService.GetTopics(subjectId);
        }

    }
}
