using Maat.Domain.Enums;
using Maat.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maat.Domain.DTO
{
    public class SportEventDto
    {
        public string Name { get; set; }
        public bool IsAvailable { get; set; }

        public DateTime EventTime { get; set; }

        public string Place { get; set; }

        public int NumberOfParticipatingPlayers { get; set; }

        public int NumberOfPlayersNeeded { get; set; }

        public bool IsPayingNeeded { get; set; }

        public SkillLevelEnum SkillLevel { get; set; }

        public SportTypeEnum SportType { get; set; }

        public int CreatedBy { get; set; }
    }
}
