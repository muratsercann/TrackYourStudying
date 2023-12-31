﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbManagement.Models
{
    public class User
    {
        [Key] // Bu alanın birincil anahtar (primary key) olduğunu belirtir
        public int Id { get; set; }

        [Required] // Bu alanın gereklilik olduğunu belirtir
        [MaxLength(50)] // Maksimum uzunluğunu 50 karakter olarak sınırlar
        public string Username { get; set; }

        [Required]
        public string PasswordSalt { get; set; }

        [Required]
        public string PasswordHash { get; set; }


        [MaxLength(50)]
        public string? FirstName { get; set; }

        [MaxLength(50)]
        public string? LastName { get; set; }

        [MaxLength(100)]
        public string? Email { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? LastLoginDate { get; set; }

        public bool? IsActive { get; set; }

        [MaxLength(50)]
        public string? UserRole { get; set; }

        [MaxLength(200)]
        public string? ProfilePictureUrl { get; set; }

        [MaxLength(20)]
        public string? PhoneNumber { get; set; }

        public DateTime? DateOfBirth { get; set; }

        //YKS,LGS
        public string? ExamType { get; set; }

        //Alan SAY,EA,SOZ gibi
        public string? ExamSubType { get; set; }
       
    }
}

