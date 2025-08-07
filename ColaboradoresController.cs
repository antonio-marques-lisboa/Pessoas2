using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using DirecaoPessoasAPI.Models;

namespace DirecaoPessoasAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ColaboradoresController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Colaborador> Get()
        {
            return new List<Colaborador>
            {
                new Colaborador { Nome = "Joana Silva", Idade = 34, Email = "joana.silva@empresa.pt", Telefone = "912345678", Direcao = "Subscrição", Departamento = "Técnico", Localizacao = "Lisboa" },
                new Colaborador { Nome = "Carlos Ferreira", Idade = 41, Email = "carlos.ferreira@empresa.pt", Telefone = "919876543", Direcao = "Comercial", Departamento = "Vendas Diretas", Localizacao = "Porto" }
            };
        }
    }
}