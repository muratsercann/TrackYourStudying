using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbManagement.Migrations
{
    /// <inheritdoc />
    public partial class AddUserNameToStudySessionTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "StudySessions",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "StudySessions");
        }
    }
}
