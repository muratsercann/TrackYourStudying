using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public interface ITopicRepository
    {
        void Create(Topic topic);

        void Create(List<Topic> topics);

        List<Topic> GetTopics();
        List<Topic> GetTopics(int subjectId);
        Topic GetTopic(int id);
    }
}
