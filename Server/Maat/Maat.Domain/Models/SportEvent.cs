﻿using Maat.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maat.Domain.Models
{
    public class SportEvent
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public DateTime EventTime { get; set; }

        public string Place { get; set; }

        public int NumberOfParticipatingPlayers { get; set; }

        public int NumberOfPlayersNeeded { get; set; }

        public bool IsPayingNeeded { get; set; }

        public SkillLevelEnum SkillLevel { get; set; }

        public SportTypeEnum SportType { get; set; }

        public User CreatedBy { get; set; }

        public ICollection<User> Users { get; set; }

        public List<SportEventUser> SportEventUsers { get; set; }
    }
}
