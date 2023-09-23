using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicController : ControllerBase
    {
        private readonly TopicService _topicService;
        public TopicController(ITopicRepository repo)
        {
            _topicService = new TopicService(repo);
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<DbManagement.Models.Topic> Get()
        {
            try
            {
                return _topicService.GetTopics();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("GetTopicsBySubjectId/{subjectId}")]
        [Authorize]
        public IEnumerable<DbManagement.Models.Topic> GetTopicsBySubjectId(int subjectId)
        {
            try
            {
                return _topicService.GetTopics(subjectId);
            }
            catch (Exception)
            {
                throw;
            }
            
        }

    }
}
