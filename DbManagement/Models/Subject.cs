using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }

        //public ICollection<Topic>? Topics {  get; set; }

    }
}
