using DbManagement.Models;
using DbManagement.Repositories;
using Microsoft.EntityFrameworkCore.Scaffolding;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _userRepository.GetAllUsers();
        }

        public async Task<UserResource> Register(RegisterResource resource, CancellationToken cancellationToken)
        {
            return await _userRepository.Register(resource, cancellationToken);
        }

        public async Task<UserResource> Login(LoginResource resource, CancellationToken cancellationToken, IConfiguration config)
        {
            return await _userRepository.Login(resource, cancellationToken, config);
        }
    }
}
