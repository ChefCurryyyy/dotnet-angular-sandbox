using Microsoft.EntityFrameworkCore;
using DotnetAngularSandbox.Backend.Models;

namespace DotnetAngularSandbox.Backend.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    public DbSet<Todo> Todo { get; set; }
}
