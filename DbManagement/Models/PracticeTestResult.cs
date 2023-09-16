using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class PracticeTestResult
    {
        [Key]
        public int Id { get; set; }

        public int PracticeTestId { get; set; }

        public int PracticeTestSubjectId { get; set; }

        public int Correct { get; set; }

        public int InCorrect { get; set; }

        public int UnAnswered { get; set; }

        public decimal Net { get; set; }


    }
}
