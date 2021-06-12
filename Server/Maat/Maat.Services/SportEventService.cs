﻿using Maat.DataAccess;
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
        public List<SportEvent> GetSportEvents()
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
    }
}
