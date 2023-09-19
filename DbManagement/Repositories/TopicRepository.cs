using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class TopicRepository : ITopicRepository
    {
        private readonly TrackYourStudyContext _dbContext;
        private bool disposedValue;

        public TopicRepository(TrackYourStudyContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Create(Topic topic)
        {
            _dbContext.Topics.Add(topic);
            _dbContext.SaveChanges();
        }

        public void Create(List<Topic> topics)
        {
            foreach (Topic topic in topics)
            {
                _dbContext.Topics.Add(topic);
            }

            _dbContext.SaveChanges();
        }

        public Topic GetTopic(int id)
        {
            //TODO : belirtilen id ile topic var mı kontrolü
            return _dbContext.Topics.Where(topic => topic.Id == id).First();
        }

        public List<Topic> GetTopics()
        {
            return _dbContext.Topics.ToList();
        }

        public List<Topic> GetTopics(int subjectId)
        {
            //TODO : belirtilen subjectId var mı kontrolü
            return _dbContext.Topics.Where(topic => topic.SubjectId == subjectId).ToList();
        }

       
       
    }
}
