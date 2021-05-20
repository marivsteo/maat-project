using Maat.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Maat.DataAccess
{
    public class MaatDbContext : DbContext
    {
        public MaatDbContext(DbContextOptions<MaatDbContext> options) : base(options) { }

        public DbSet<SportEvent> SportEvents { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SportEvent>().HasData(
                new SportEvent()
                {
                    Id = 1,
                    Name = "Football",
                    IsAvailable = true
                });

            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
        }
    }
}
