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

    /// <summary>
    /// Tüm derslerin ham bilgilerini çeker.
    /// </summary>
    /// <returns></returns>
    public List<Subject> GetSubjects()
    {
        using var db = new TrackYourStudyContext();
        return db.Subjects.ToList();
    }

    public Subject GetSubject(int id)
    {
        using var db = new TrackYourStudyContext();
        return db.Subjects.Where(subject => subject.Id == id).FirstOrDefault();
    }

    /// <summary>
    /// Tüm konuların ham verilerini çeker
    /// </summary>
    /// <returns></returns>
    public List<Topic> GetTopics()
    {
        using var db = new TrackYourStudyContext();
        return db.Topics.ToList();
    }

    /// <summary>
    /// Belli bir dersin konularını veritabanından çeker
    /// </summary>
    /// <param name="subjectId"></param>
    /// <returns></returns>
    public List<Topic> GetTopics(int subjectId)
    {
        using var db = new TrackYourStudyContext();
        return db.Topics.Where(topic => topic.SubjectId == subjectId).ToList();
    }

    public Topic GetTopic(int id)
    {
        using var db = new TrackYourStudyContext();
        return db.Topics.Where(topic => topic.Id == id).FirstOrDefault();
    }

    public List<StudySession> GetSessions()
    {
        using var db = new TrackYourStudyContext();

        var sessions = db.StudySessions.ToList();

        return sessions;
    }

    public List<StudySessionByDate> GetStudySessionsByDate()
    {
        List<StudySession> sessions = GetSessions();

        List<StudySessionByDate> result = (from s in sessions
                                           group s by s.Date into newGroup
                                           orderby newGroup.Key descending
                                           select
                                           new StudySessionByDate { Date = newGroup.Key, Sessions = newGroup.ToList() }).ToList();

        return result;
    }

}


