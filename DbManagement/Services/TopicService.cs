using DbManagement.Models;
using DbManagement.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Services
{
    public class TopicService
    {
        private readonly ITopicRepository _topicRepository;

        public TopicService(ITopicRepository topicRepository)
        {
            _topicRepository = topicRepository ?? throw new ArgumentNullException(nameof(topicRepository));
        }

        public Topic GetTopic(int id)
        {
            return _topicRepository.GetTopic(id);
        }

        public IEnumerable<Topic> GetTopics()
        {
            return _topicRepository.GetTopics();
        }

        public IEnumerable<Topic> GetTopics(int subjectId)
        {
            return _topicRepository.GetTopics(subjectId);
        }
    }
}
