using DbManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

public class TracYourStudyContext : DbContext
{
    public DbSet<StudySession> StudySessions { get; set; }
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<Topic> Topics { get; set; }

    public string DbPath { get; }

    public TracYourStudyContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "TrackYourStudyDB.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={DbPath}");
    }
}


