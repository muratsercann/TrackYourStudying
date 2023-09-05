﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DbManagement.Migrations
{
    [DbContext(typeof(TrackYourStudyContext))]
    partial class TracYourStudyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.10");

            modelBuilder.Entity("DbManagement.Models.StudySession", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<bool>("DidTopicStudy")
                        .HasColumnType("INTEGER");

                    b.Property<string>("EndTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("SolvedQuestions")
                        .HasColumnType("INTEGER");

                    b.Property<string>("StartTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("StudyDuration")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Subject")
                        .HasColumnType("TEXT");

                    b.Property<string>("Topic")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("StudySessions");
                });

            modelBuilder.Entity("DbManagement.Models.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Code")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("DbManagement.Models.Topic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("SubjectId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Topics");
                });
#pragma warning restore 612, 618
        }
    }
}
