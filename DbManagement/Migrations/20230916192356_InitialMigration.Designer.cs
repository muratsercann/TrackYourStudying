﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DbManagement.Migrations
{
    [DbContext(typeof(TrackYourStudyContext))]
    [Migration("20230916192356_InitialMigration")]
    partial class InitialMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.10");

            modelBuilder.Entity("DbManagement.Models.PracticeTest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Correct")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("InCorrect")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("Net")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("Score")
                        .HasColumnType("TEXT");

                    b.Property<int?>("UnAnswered")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("PracticeTests");
                });

            modelBuilder.Entity("DbManagement.Models.PracticeTestResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Correct")
                        .HasColumnType("INTEGER");

                    b.Property<int>("InCorrect")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("Net")
                        .HasColumnType("TEXT");

                    b.Property<int>("PracticeTestId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PracticeTestSubjectId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("UnAnswered")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("PracticeTestResults");
                });

            modelBuilder.Entity("DbManagement.Models.PracticeTestSubject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<int?>("NumberOfQuestion")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("PracticeTestSubjects");
                });

            modelBuilder.Entity("DbManagement.Models.StudySession", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Correct")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<bool?>("DidTopicStudy")
                        .HasColumnType("INTEGER");

                    b.Property<string>("EndTime")
                        .HasMaxLength(5)
                        .HasColumnType("TEXT");

                    b.Property<int?>("InCorrect")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("Net")
                        .HasColumnType("TEXT");

                    b.Property<int?>("SolvedQuestions")
                        .HasColumnType("INTEGER");

                    b.Property<string>("StartTime")
                        .HasMaxLength(5)
                        .HasColumnType("TEXT");

                    b.Property<int?>("StudyDurationMinutes")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("SubjectId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("TopicId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("UnAnswered")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("SubjectId");

                    b.HasIndex("TopicId");

                    b.ToTable("StudySessions");
                });

            modelBuilder.Entity("DbManagement.Models.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Code")
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<int?>("Sequence")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Type")
                        .HasMaxLength(8)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("DbManagement.Models.Topic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<int?>("Sequence")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SubjectId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("SubjectId");

                    b.ToTable("Topics");
                });

            modelBuilder.Entity("DbManagement.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<string>("ExamSubType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ExamType")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("LastLoginDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<string>("ProfilePictureUrl")
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.Property<string>("UserRole")
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DbManagement.Models.StudySession", b =>
                {
                    b.HasOne("DbManagement.Models.Subject", "Subject")
                        .WithMany()
                        .HasForeignKey("SubjectId");

                    b.HasOne("DbManagement.Models.Topic", "Topic")
                        .WithMany()
                        .HasForeignKey("TopicId");

                    b.Navigation("Subject");

                    b.Navigation("Topic");
                });

            modelBuilder.Entity("DbManagement.Models.Topic", b =>
                {
                    b.HasOne("DbManagement.Models.Subject", "Subject")
                        .WithMany()
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Subject");
                });
#pragma warning restore 612, 618
        }
    }
}
