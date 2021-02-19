using Maat.Domain.Models;
using Maat.Services.Abstractions;
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

        public SportEventController(ISportEventService sportEventService)
        {
            _sportEventService = sportEventService;
        }

        [HttpGet]
        public ActionResult<List<SportEvent>> GetSportEvents()
        {
            return _sportEventService.GetSportEvents();
        }
    }
}
