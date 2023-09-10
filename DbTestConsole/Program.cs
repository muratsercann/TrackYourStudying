﻿
using DbManagement;
using DbManagement.Models;
using DbManagement.Repositories;
using DbManagement.Services;
using DbTestConsole;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.Extensions.DependencyInjection;

internal class Program
{

    private static void Main(string[] args)
    {

        var subjectRepository = new DbManagement.Repositories.SubjectRepository(new TrackYourStudyContext());

        var subjects = subjectRepository.GetSubjects();
        //CreateSubjects();
        //CreateTopics();

        //List<Subject> subjects = db.GetSubjects();
        //List<Topic> topics = db.GetTopics(1);
        //List<StudySessionByDate> sessions = db.GetStudySessionsByDate();

        //CreateTopics();

    }
    /// <summary>
    /// It creates firt seed for subject table..
    /// </summary>
    private static void CreateSubjects()
    {        
        try
        {
            List<Subject> subjects = new List<Subject>();
            subjects.Add(new Subject { Name = "Tyt Türkçe", Code = "TYTTUR" });
            subjects.Add(new Subject { Name = "Tyt Matematik", Code = "TYTMAT" });
            subjects.Add(new Subject { Name = "Tyt Geometri", Code = "TYTGEO" });
            subjects.Add(new Subject { Name = "Tyt Fizik", Code = "TYTFIZ" });
            subjects.Add(new Subject { Name = "Tyt Kimya", Code = "TYTKIM" });
            subjects.Add(new Subject { Name = "Tyt Biyoloji", Code = "TYTBIY" });
            subjects.Add(new Subject { Name = "Tyt Tarih", Code = "TYTTAR" });
            subjects.Add(new Subject { Name = "Tyt Coğrafya", Code = "TYTCOG" });

            //kayıt işlemi için servise gidecek
            
        }
        catch (Exception ex)
        {
            throw;
        }

    }


    /// <summary>
    /// Creates first seed for Tyt Mat. topics
    /// </summary>
    private static void CreateTopics(string[] topics, int subjectId)
    {
        //sing var db = new TrackYourStudyContext();
        try
        {
            foreach (string str in topics)
            {
                Console.WriteLine($"Name : {str} SubjectId : {subjectId}");
                //db.Add(new Topic() { SubjectId = subjectId, Name = str });
            }
            Console.WriteLine("----------------------------------");
        }
        catch (Exception ex)
        {
            throw;
        }
        finally
        {
            //db.SaveChanges();
        }

    }

    private static void CreateTopics()
    {
        CreateTopics(SeedingData.TytTurkce_Topics, 1);
        CreateTopics(SeedingData.TytMatematik_Topics, 2);
        CreateTopics(SeedingData.TytGeometri_Topics, 3);
        CreateTopics(SeedingData.TytFizik_Topics, 4);
        CreateTopics(SeedingData.TytKimya_Topics, 5);
        CreateTopics(SeedingData.TytBiyoloji_Topics, 6);
        CreateTopics(SeedingData.TytTarih_Topics, 7);
        CreateTopics(SeedingData.TytCografya_Topics, 8);
    }



}