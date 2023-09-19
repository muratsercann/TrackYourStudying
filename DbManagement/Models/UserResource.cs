using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public  class UserResource
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Token { get; set; }
    }
}
