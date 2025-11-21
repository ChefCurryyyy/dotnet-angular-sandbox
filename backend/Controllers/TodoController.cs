using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotnetAngularSandbox.Backend.Data;
using DotnetAngularSandbox.Backend.Models;

namespace DotnetAngularSandbox.Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoController : ControllerBase
{
    private readonly AppDbContext _context;

    public TodoController(AppDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetTodos()
    {
        return Ok(await _context.Todo.ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> CreateTodo([FromBody] Todo todo)
    {
        _context.Todo.Add(todo);
        await _context.SaveChangesAsync();
        return Ok(todo);
    }
}