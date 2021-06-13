using Maat.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maat.Services.Abstractions
{
    public interface ISportEventService
    {
        List<SportEvent> GetAllSportEvents();

        List<SportEvent> GetAvailableSportEvents();

        SportEvent AddSportEvent(SportEvent sportEvent);

        List<SportEvent> GetSportEventsCreatedByUser(int userId);

        List<SportEvent> GetParticipatingSportEvents(int userId);
    }
}
