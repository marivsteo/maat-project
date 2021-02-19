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
        public bool IsAvailable { get; set; }
    }
}
