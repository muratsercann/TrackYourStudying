using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string? Name { get; set; }
        public Subject? Subject { get; set; }

    }
}
