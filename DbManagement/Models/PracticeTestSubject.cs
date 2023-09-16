using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    /// <summary>
    /// Deneme türlerindeki ders bölümleri
    /// örnek :
    /// TYT Sınavında ki dersler :
    /// Türkçe
    /// Temel Matematik
    /// Fen Bilimleri
    /// Sosyal Bilimler gibi.
    /// 
    /// </summary>
    public class PracticeTestSubject
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(1000)]        
        public string? Description { get; set; }

        /// <summary>
        /// TYT, AYTSAY, AYTFEN, LGS vs.
        /// </summary>
        public string Type { get; set; }
        
        public int? NumberOfQuestion { get; set; }
    }
}
