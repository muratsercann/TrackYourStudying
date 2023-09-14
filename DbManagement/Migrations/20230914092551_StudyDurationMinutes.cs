using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbManagement.Migrations
{
    /// <inheritdoc />
    public partial class StudyDurationMinutes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudyDurationMinutes",
                table: "StudySessions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudyDurationMinutes",
                table: "StudySessions");
        }
    }
}
