using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class Subject
    {
        [Key] 
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Name { get; set; }

        [MaxLength(50)]         
        public string? Code { get; set; }

        /// <summary>
        /// TYT,AYTSAY, AYTEA gibi
        /// </summary>
        [MaxLength(8)]
        public string? Type { get; set; }


        [MaxLength(1000)]        
        public string? Description { get; set; }
        
        public int? Sequence { get; set; }

    }
}
