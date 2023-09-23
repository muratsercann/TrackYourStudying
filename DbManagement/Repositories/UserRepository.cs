using DbManagement.Models;
using DbManagement.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly TrackYourStudyContext _dbContext;
        private readonly string _pepper;
        private readonly int _iteration = 3;

        public UserRepository(TrackYourStudyContext dbContext)
        {
            _dbContext = dbContext;
            _pepper = Environment.GetEnvironmentVariable("PasswordHashExamplePepper");
        }

        public async Task<List<User>> GetAllUsers()
        {
            return _dbContext.Users.ToList();
        }

        public async Task<UserResource> Register(RegisterResource resource, CancellationToken cancellationToken)
        {
            var user = new User
            {
                Username = resource.Username,
                Email = resource.Email,
                CreationDate = DateTime.Now,
                DateOfBirth = resource.DateOfBirth,
                ExamType = resource.ExamType,
                ExamSubType = resource.ExamSubType,
                FirstName = resource.FirstName,
                LastName = resource.LastName,
                PhoneNumber = resource.PhoneNumber,
                ProfilePictureUrl = resource.ProfilePictureUrl,
                UserRole = resource.UserRole,
                PasswordSalt = PasswordHasher.GenerateSalt()
            };
            user.PasswordHash = PasswordHasher.ComputeHash(resource.Password, user.PasswordSalt, _pepper, _iteration);

            await _dbContext.Users.AddAsync(user, cancellationToken);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return new UserResource() { 
                Id = user.Id, 
                Username = user.Username, 
                FirstName = user.FirstName,
                LastName = user.LastName,
                PictureUrl = user.ProfilePictureUrl,
                Email = user.Email };
        }

        public async Task<UserResource> Login(LoginResource resource, CancellationToken cancellationToken, IConfiguration config)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Username == resource.Username, cancellationToken);

            if (user == null)
                throw new Exception("Username or password did not match.");

            var passwordHash = PasswordHasher.ComputeHash(resource.Password, user.PasswordSalt, _pepper, _iteration);
            if (user.PasswordHash != passwordHash)
                throw new Exception("Username or password did not match.");

            string token = GenerateJSONWebToken(user, config);
            return new UserResource() { 
                Id = user.Id, 
                Username = user.Username, 
                FirstName = user.FirstName,
                LastName = user.LastName,
                PictureUrl = user.ProfilePictureUrl,
                Email = user.Email, 
                Token = token };
        }

        private string GenerateJSONWebToken(User userInfo, IConfiguration config)
        {
            var bytes = Encoding.UTF8.GetBytes(config["JWTKey:Secret"]);
            var securityKey = new SymmetricSecurityKey(bytes);
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Username),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("UserName", userInfo.Username),
                new Claim("UserRole", "user")
            };

            var token = new JwtSecurityToken(config["JWTKey:ValidIssuer"],
                config["JWTKey:ValidIssuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
