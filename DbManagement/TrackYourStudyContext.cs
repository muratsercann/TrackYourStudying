﻿using DbManagement;
using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;

public class TrackYourStudyContext : DbContext
{

    public DbSet<StudySession> StudySessions { get; set; }
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<Topic> Topics { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<PracticeTestSubject> PracticeTestSubjects { get; set; }
    public DbSet<PracticeTest> PracticeTests { get; set; }
    public DbSet<PracticeTestResult> PracticeTestResults { get; set; }

    public string DbPath { get; }

    public TrackYourStudyContext()
    {
        //var f = AppDomain.CurrentDomain.BaseDirectory;
        //var f2 = AppDomain.CurrentDomain.DynamicDirectory;
        //var folder = Environment.SpecialFolder.LocalApplicationData;
        //var path = Environment.GetFolderPath(folder);
        //DbPath = System.IO.Path.Join("D:\\TrackYourStudying\\TrackYourStudyDB.db");

        DbPath = System.IO.Path.Join("D:\\TrackYourStudying\\DbManagement\\Database\\TrackYourStudyDB.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={DbPath}");
    }

}


