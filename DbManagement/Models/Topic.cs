using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class Topic
    {
        [Key]
        public int Id { get; set; }

        public int SubjectId { get; set; }

        [MaxLength(200)]        
        public string Name { get; set; }

        [MaxLength(1000)]         
        public string? Description { get; set; }
        
        public int? Sequence { get; set; }

        public Subject? Subject { get; set; }

    }
}
