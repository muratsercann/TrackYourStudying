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
            List<DbManagement.Models.Subject> subjects = db.Subjects.Select(e => new DbManagement.Models.Subject { Id = e.Id, Name = e.Name, Code = e.Code }).OrderBy(x => x.Id).ToList();

            List<DbManagement.Models.Topic> topics = db.Topics.Select(t => new DbManagement.Models.Topic { Id = t.Id, Name = t.Name, SubjectId = t.SubjectId }).ToList();


            List<DbManagement.Models.Subject> result =
            (from s in subjects
             join topic in topics on s.Id equals topic.SubjectId into groupJoining
             select new DbManagement.Models.Subject
             {
                 Id = s.Id,
                 Name = s.Name,
                 Code = s.Code,
                 Topics = groupJoining.ToList()
             }).ToList();

            return result;
        }

        public List<Topic> GenerateTopics(int count , string prefix)
        {
            List<Topic> topics = new List<Topic>();
            for (int i = 1; i <= count; i++)
            {
                topics.Add(new Topic { Id = i, Name = $"{prefix} TopicId {i}" });
            }
            return topics;
        }
    }
}
