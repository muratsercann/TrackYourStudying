--çözülen toplam soru
select sum(StudySessions.SolvedQuestions) from StudySessions;
--tarih - çözülen soru
select Date,SUM(SolvedQuestions) TotalSolvedQuestions from StudySessions GROUP BY Date order by starttime;
--tarih - çalışma süresi
select Date,SUM(StudyDurationMinutes) TotalMinutes from StudySessions GROUP BY Date order by starttime;
--ders - çözülen soru
select  Subjects.Name, SUM(StudySessions.SolvedQuestions) TotalSolvedQuestions from StudySessions 
left join Subjects on StudySessions.SubjectId = Subjects.Id
where StudySessions.SolvedQuestions > 0
group by StudySessions.SubjectId;
--ders - harcanan zaman (dakika)
select  Subjects.Name, SUM(StudySessions.StudyDurationMinutes) TotalMinutes from StudySessions 
left join Subjects on StudySessions.SubjectId = Subjects.Id
where StudySessions.SolvedQuestions > 0
group by StudySessions.SubjectId;
--Ders çalışma süresi ve çözülen soru
select 
StudySessions.Date ,Subjects.Id DersId, Subjects.Name Ders, 
Topics.Id KonuId ,Topics.Name Konu, SUM(StudySessions.StudyDurationMinutes) , SUM(StudySessions.SolvedQuestions)
 from StudySessions 
 left join Topics on StudySessions.TopicId = Topics.Id
left join Subjects on Topics.SubjectId = Subjects.Id
--where StudySessions.SubjectId = 1 StudySessions.TopicId = 1
group by StudySessions.SubjectId
 ;
select SUM(StudyDurationMinutes) from StudySessions where TopicId = "3";



;
