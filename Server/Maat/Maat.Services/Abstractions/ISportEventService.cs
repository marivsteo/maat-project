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
        List<SportEvent> GetSportEvents();

        SportEvent AddSportEvent(SportEvent sportEvent);
    }
}
