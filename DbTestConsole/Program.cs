
using DbManagement;
using DbManagement.Models;
using DbManagement.Repositories;
using DbManagement.Services;
using DbTestConsole;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.Extensions.DependencyInjection;

internal class Program
{

    private static void Main(string[] args)
    {
        //using var repo = new DbManagement.Repositories.TopicRepository(new TrackYourStudyContext());

        //List<Topic> topics = repo.GetTopics();
        using var db = new TrackYourStudyContext();
        //var sessions = db.StudySessions;

        List<StudySessionByDate> result = (from s in 
                                        db.StudySessions.Include(s =>                                              s.Topic).ThenInclude(s => s.Subject)
                                           orderby s.StartTime, s.EndTime
                                           group s by s.Date.Date into newGroup
                                           orderby newGroup.Key descending
                                           select
                                           new StudySessionByDate
                                           {

                                               Date = newGroup.Key,
                                               Sessions = newGroup.ToList(),
                                               TotalSolvedQuestion =
                                               newGroup.Sum(x => x.SolvedQuestions),
                                               TotalDurationMinutes =
                                               newGroup.Sum(x => x.StudyDurationMinutes)
                                           }).ToList();




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


            using var repo = new DbManagement.Repositories.SubjectRepository(new TrackYourStudyContext());
            repo.CreateSubjects(subjects);

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
    private static List<Topic> CreateTopics(string[] topics, int subjectId)
    {
        //sing var db = new TrackYourStudyContext();
        List<Topic> topicList = new List<Topic>();
        try
        {
            int seq = 1;
            foreach (string str in topics)
            {
                topicList.Add(new Topic() { SubjectId = subjectId, Name = str, Sequence = seq });

                seq += 1;
            }

            return topicList;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            //db.SaveChanges();
        }

    }

    private static void CreateTopics()
    {
        using var repo = new TopicRepository(new TrackYourStudyContext());


        List<Topic> allTopics = new List<Topic>();
        List<Topic> tur = CreateTopics(SeedingData.TytTurkce_Topics, 1);
        List<Topic> mat = CreateTopics(SeedingData.TytMatematik_Topics, 2);
        List<Topic> geo = CreateTopics(SeedingData.TytGeometri_Topics, 3);
        List<Topic> fiz = CreateTopics(SeedingData.TytFizik_Topics, 4);
        List<Topic> kim = CreateTopics(SeedingData.TytKimya_Topics, 5);
        List<Topic> biy = CreateTopics(SeedingData.TytBiyoloji_Topics, 6);
        List<Topic> tar = CreateTopics(SeedingData.TytTarih_Topics, 7);
        List<Topic> cog = CreateTopics(SeedingData.TytCografya_Topics, 8);

        allTopics.AddRange(tur);
        allTopics.AddRange(mat);
        allTopics.AddRange(geo);
        allTopics.AddRange(fiz);
        allTopics.AddRange(kim);
        allTopics.AddRange(biy);
        allTopics.AddRange(tar);
        allTopics.AddRange(cog);

        repo.Create(allTopics);

    }



}