using DbManagement.Repositories;
using DbManagement.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrackYourStudyingApp.DTO;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]//setupProxy.js/context içerisine 'user' eklenmesi gerekli
    public class UserController : ControllerBase
    {
        private IConfiguration? _config;
        private readonly UserService _userService;

        public UserController(IConfiguration config, IUserRepository repo)
        {
            _userService = new UserService(repo);
            _config = config;
        }

        [AllowAnonymous]
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
                return BadRequest($"Bir hata oluştu : {e}");
            }
        }

        [AllowAnonymous]
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
                return BadRequest($"Bir hata oluştu : {e}");
            }
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            return Ok("Token is valid");
        }
    }
}
