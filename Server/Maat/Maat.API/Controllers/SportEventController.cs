using Maat.API.Helpers;
using Maat.Domain.DTO;
using Maat.Domain.Models;
using Maat.Services.Abstractions;
using Maat.Services.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Maat.API.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class SportEventController : ControllerBase
    {
        private readonly ISportEventService _sportEventService;
        private readonly IUserService _userService;
        private readonly JwtService _jwtService;

        public SportEventController(ISportEventService sportEventService, IUserService userService, JwtService jwtService)
        {
            _sportEventService = sportEventService;
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpGet("all")]
        public ActionResult<List<SportEvent>> GetAllSportEvents()
        {
            return _sportEventService.GetAllSportEvents();
        }

        [HttpGet]
        public ActionResult<List<SportEvent>> GetAvailableSportEvents()
        {
            User user;
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                user = _userService.GetUserById(userId);

            }
            catch (Exception)
            {
                return Unauthorized();
            }

            return _sportEventService.GetAvailableSportEvents(user.Id);
        }

        [HttpGet("my_events")]
        public ActionResult<List<SportEventDto>> GetSportEventsCreatedByUser()
        {
            User user;
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                user = _userService.GetUserById(userId);

            }
            catch (Exception)
            {
                return Unauthorized();
            }

            return _sportEventService.GetSportEventsCreatedByUser(user.Id);
        }

        [HttpGet("participating")]
        public ActionResult<List<SportEvent>> GetParticipatingSportEvents()
        {
            User user;
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                user = _userService.GetUserById(userId);

            }
            catch (Exception e)
            {
                return Unauthorized();
            }

            return _sportEventService.GetParticipatingSportEvents(user.Id);
        }

        [HttpPost("add")]
        public IActionResult AddSportEvent([FromBody] SportEventDto sportEventDto)
        {
            User user = null;
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                user = _userService.GetUserById(userId);

            }
            catch (Exception e)
            {
                return Unauthorized();
            }

            var sportEvent = new SportEvent
            {
                Name = sportEventDto.Name,
                EventTime = sportEventDto.EventTime,
                Place = sportEventDto.Place,
                NumberOfParticipatingPlayers = sportEventDto.NumberOfParticipatingPlayers,
                NumberOfPlayersNeeded = sportEventDto.NumberOfPlayersNeeded,
                IsPayingNeeded = sportEventDto.IsPayingNeeded,
                SkillLevel = sportEventDto.SkillLevel,
                SportType = sportEventDto.SportType,
                CreatedBy = user
            };

            try
            {
                return Created("sport event created", _sportEventService.AddSportEvent(sportEvent));
            }
            catch (AddSportEventDbException e)
            {
                return StatusCode(409);
            }
        }
    }
}
