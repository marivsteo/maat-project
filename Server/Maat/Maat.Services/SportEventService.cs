using Maat.DataAccess;
using Maat.Domain.DTO;
using Maat.Domain.Models;
using Maat.Services.Abstractions;
using Maat.Services.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maat.Services
{
    public class SportEventService : ISportEventService
    {
        private readonly MaatDbContext _dbContext;

        public SportEventService(MaatDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<SportEvent> GetAllSportEvents()
        {
            return _dbContext.SportEvents.ToList();
        }

        public SportEvent AddSportEvent(SportEvent sportEvent) {
            try
            {
                _dbContext.SportEvents.Add(sportEvent);
                sportEvent.Id = _dbContext.SaveChanges();
                return sportEvent;
            }
            catch (Exception e)
            {
                throw new AddSportEventDbException(e.Message);
            }
        }

        public List<SportEvent> GetAvailableSportEvents(int userId)
        {
            var currentDateTime = DateTime.Now;
            return _dbContext.SportEvents.Where(se => se.EventTime >= currentDateTime && se.CreatedBy.Id != userId && se.NumberOfPlayersNeeded > 0).OrderBy(se => se.EventTime).ToList();
        }

        public List<SportEventDto> GetSportEventsCreatedByUser(int userId)
        {
            return _dbContext.SportEvents.Where(se => se.CreatedBy.Id == userId).Select(se => new SportEventDto {
                Id = se.Id,
                Name = se.Name,
                EventTime = se.EventTime,
                Place = se.Place,
                NumberOfParticipatingPlayers = se.NumberOfParticipatingPlayers,
                NumberOfPlayersNeeded = se.NumberOfPlayersNeeded,
                IsPayingNeeded = se.IsPayingNeeded,
                SkillLevel = se.SkillLevel,
                SportType = se.SportType
            }).ToList();
        }

        public List<SportEvent> GetParticipatingSportEvents(int userId)
        {
            var sportEventsIds = _dbContext.SportEventUsers.Where(u => u.UserId == userId).Select(se => se.SportEventId);
            return _dbContext.SportEvents.Where(se => sportEventsIds.Any(s => s == se.Id)).ToList();
        }

        public SportEvent GetSportEventById(int eventId)
        {
            return _dbContext.SportEvents.FirstOrDefault(se => se.Id == eventId);
        }

        public void AddSportEventParticipation(int eventId, int userId)
        {
            var existingSportEventParticipations = _dbContext.SportEventUsers.FirstOrDefault(su => su.SportEventId == eventId && su.UserId == userId);
            if (existingSportEventParticipations != null)
            {
                throw new AddSportEventParticipationException("Can't participate in the same event twice!");
            }
            var sportEvent = _dbContext.SportEvents.FirstOrDefault(se => se.Id == eventId);
            var user = _dbContext.Users.FirstOrDefault(u => u.Id == userId);
            SportEventUser entry = new()
            {
                User = user,
                UserId = user.Id,
                SportEvent = sportEvent,
                SportEventId = sportEvent.Id
            };
            try
            {
                _dbContext.SportEventUsers.Add(entry);
                sportEvent.NumberOfPlayersNeeded--;
                _dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw new AddSportEventParticipationException(e.Message);
            }
        }
    }
}
