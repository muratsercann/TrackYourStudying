using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class UserResource
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string FullName
        {
            get
            {
                if (!string.IsNullOrEmpty(FirstName) && !string.IsNullOrEmpty(LastName))
                {
                    return $"{FirstName} + {LastName}";
                }
                return "";
            }
        }

        public string? PictureUrl { get; set; }

        public string? Email { get; set; }

        public string? Token { get; set; }
    }
}
