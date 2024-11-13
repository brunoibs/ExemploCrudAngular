using System.ComponentModel.DataAnnotations;

namespace CrudComAngularJsWebApi.Models
{
    public class Celular
    {
        [Key]
        public int Id { get; set; }

        public string Marca { get; set; }

        public string Modelo { get; set; }

        public string Cor { get; set; }

        public string TipoChip { get; set; }

        public string MemoriaInterna { get; set; }



    }
}