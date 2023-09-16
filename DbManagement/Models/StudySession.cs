using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
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
    public class StudySession
    {
        [Key]
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public string UserName { get; set; }

        [MaxLength(5)]      
        public string? StartTime { get; set; }

        [MaxLength(5)]        
        public string? EndTime { get; set; }        

        public int? StudyDurationMinutes { get; set; }

        public int? SubjectId { get; set; } //Ders Id
                                           
        public int? TopicId { get; set; } //Konu Id
                                         
        public int? SolvedQuestions { get; set; }    
        
        public bool? DidTopicStudy { get; set; }

        [MaxLength(1000)]        
        public string? Description { get; set; }

        public Topic? Topic { get; set; }

        public Subject? Subject { get; set; }        

        public int? Correct { get; set; }        

        public int? InCorrect { get; set; }     
        
        public int? UnAnswered { get; set; }    
        
        public decimal? Net { get; set; }
    }

}
