using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.Models;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController
    {
        [HttpGet]
        public IEnumerable<Subject> Get()
        {
            List<Subject> subjects = new List<Subject>
            {
                new Subject
                {
                    Id = 1,
                    Name = "Mathematics",
                    Topics = GenerateTopics(12)
                },
                new Subject
                {
                    Id = 2,
                    Name = "Physics",
                    Topics = GenerateTopics(7)
                },
                new Subject
                {
                    Id = 3,
                    Name = "Chemistry",
                    Topics = GenerateTopics(10)
                }
            };

            return subjects;
        }

        public List<Topic> GenerateTopics(int count)
        {
            List<Topic> topics = new List<Topic>();
            for (int i = 1; i <= count; i++)
            {
                topics.Add(new Topic { Id = i, Name = $"Topic {i}" });
            }
            return topics;
        }
    }
}
