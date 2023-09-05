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

    public string DbPath { get; }

    public TrackYourStudyContext()
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

    public static void CreateSession(StudySession session)
    {

        using var db = new TrackYourStudyContext();

        db.Add(session);
        db.SaveChanges();

    }

    public List<Subject> GetSubjects()
    {
        using var db = new TrackYourStudyContext();
        List<Subject> subjects = db.Subjects.Select(e => new Subject { Id = e.Id, Name = e.Name, Code = e.Code }).OrderBy(x => x.Id).ToList<Subject>();

        List<Topic> topics = db.Topics.Select(t => new Topic { Id = t.Id, Name = t.Name, SubjectId = t.SubjectId }).ToList<Topic>();


        List<Subject> query =
        (from s in subjects
         join topic in topics on s.Id equals topic.SubjectId into groupJoining
         select new Subject
         {
             Id = s.Id,
             Name = s.Name,
             Code = s.Code,
             Topics = groupJoining.ToList()
         }).ToList();

        return subjects;
    }

}


