using DbManagement.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public  interface IUserRepository
    {
        Task<List<Models.User>> GetAllUsers();

        Task<UserResource> Register(RegisterResource resource, CancellationToken cancellationToken);
        Task<UserResource> Login(LoginResource resource, CancellationToken cancellationToken, IConfiguration config);

    }
}
