﻿using DbManagement.Repositories;
using Microsoft.AspNetCore.Mvc;
using DbManagement.Services;

namespace TrackYourStudyingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController
    {
        private readonly SubjectService _subjectService;

        public SubjectController(ISubjectRepository repo)
        {
            _subjectService = new SubjectService(repo);
        }

        [HttpGet]
        public IEnumerable<DbManagement.Models.Subject> Get()
        {
            return _subjectService.GetSubjects(); ;
        }

    }
    
}
