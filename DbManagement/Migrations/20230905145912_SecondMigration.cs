using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbManagement.Migrations
{
    /// <inheritdoc />
    public partial class SecondMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudyDuration",
                table: "StudySessions");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "StudySessions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Topics_SubjectId",
                table: "Topics",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Topics_Subjects_SubjectId",
                table: "Topics",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Topics_Subjects_SubjectId",
                table: "Topics");

            migrationBuilder.DropIndex(
                name: "IX_Topics_SubjectId",
                table: "Topics");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "StudySessions");

            migrationBuilder.AddColumn<int>(
                name: "StudyDuration",
                table: "StudySessions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
