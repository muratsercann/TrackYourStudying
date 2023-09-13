using DbManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class TopicRepository : ITopicRepository, IDisposable
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

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        // ~TopicRepository()
        // {
        //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     Dispose(disposing: false);
        // }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

       
    }
}
