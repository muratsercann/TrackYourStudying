using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class RegisterResource
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
        public string Email { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? UserRole { get; set; }

        public string? ProfilePictureUrl { get; set; }

        public string? PhoneNumber { get; set; }

        public DateTime? DateOfBirth { get; set; }

        //YKS,LGS
        public string? ExamType { get; set; }

        //Alan SAY,EA,SOZ gibi
        public string? ExamSubType { get; set; }
    }
}
