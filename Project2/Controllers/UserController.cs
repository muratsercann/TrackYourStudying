using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.DTO;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private IConfiguration? _config;
        private readonly UserService _userService;

        public UserController(IConfiguration config, IUserRepository repo)
        {
            _userService = new UserService(repo);
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO resourceDTO, CancellationToken cancellationToken)
        {
            try
            {
                var resource = new DbManagement.Models.RegisterResource()
                {
                    Username = resourceDTO.Username,
                    Password = resourceDTO.Password,
                    Email = resourceDTO.Email
                };

                var response = await _userService.Register(resource, cancellationToken);
                return Ok(response);
            }
            catch (Exception e)
            {
                return BadRequest(new { ErrorMessage = e.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginResourceDTO resourceDTO, CancellationToken cancellationToken)
        {
            try
            {
                var resource = new DbManagement.Models.LoginResource()
                {
                    Username = resourceDTO.Username,
                    Password = resourceDTO.Password,
                };

                var response = await _userService.Login(resource, cancellationToken, _config);

                return Ok(response);
            }
            catch (Exception e)
            {
                return BadRequest(new { ErrorMessage = e.Message });
            }
        }


        [HttpGet("login2")]
        public IActionResult Login2()
        {
            return Ok("Login2 başarılı");
        }
    }
}
