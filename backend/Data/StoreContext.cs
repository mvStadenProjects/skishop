using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
