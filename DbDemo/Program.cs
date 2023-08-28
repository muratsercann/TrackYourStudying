using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection.Metadata;
using static System.Reflection.Metadata.BlobBuilder;
using DbManagement;

internal class Program
{
    private static void Main(string[] args)
    {
        using var db = new BloggingContext();

        // Note: This sample requires the database to be created before running.
        //Console.WriteLine($"Database path: {db.DbPath}.");
        DeleteAll();

        
    }

    private static void WriteOnConsole(Blog b)
    {
        Console.WriteLine("Id : " + b.BlogId);
        Console.WriteLine("Url : " + b.Url);
        Console.WriteLine("");
    }

    private static void WriteOnConsole(List<Blog> blogs)
    {
        Console.WriteLine("All Blogs : ");
        foreach (Blog item in blogs)
        {
            Console.WriteLine("Id : " + item.BlogId);
            Console.WriteLine("Url : " + item.Url);
            Console.WriteLine("------------------------------------------------");
        }
        Console.WriteLine("\n\n");
    }

    private static void WriteOnDb(List<Blog> blogs)
    {
        foreach (Blog item in blogs)
        {
            Create(item);
        }
    }

    private static List<Blog> CreateBlogList()
    {
        List<Blog> blogs = new List<Blog>();
        for (int i = 0; i < 150; i++)
        {
            Blog blog = new Blog();
            blog.BlogId = i;
            blog.Url = "http://www.blogsite_" + i;
            blogs.Add(blog);
        }

        return blogs;
    }

    private static void CrateSampleDataOnDb()
    {
        Blog blog = new Blog();
        for (int i = 0; i < 150; i++)
        {

            blog = new Blog { BlogId = i, Url = ("https://www.MyBlog_" + i.ToString()) };
            Create(blog);
            Console.WriteLine($"Kayıt Başarılı : BlogId : {blog.BlogId} Url : {blog.Url}");
        }
    }

    private static void DeleteAll()
    {
        List<Blog> blogs = ReadAll();
        foreach (Blog blog in blogs)
        {
            Delete(blog);
        }

        Console.WriteLine("Deleted All Data \n\n");
    }

    private static List<Blog> ReadAll()
    {

        using var db = new BloggingContext();

        Console.WriteLine("All Blogs : \n\n");
        var blog = db.Blogs
            .OrderBy(b => b.BlogId).ToList<Blog>();

        return blog;
    }

    private static Blog GetById(int id)
    {
        using var db = new BloggingContext();

        Console.WriteLine("Querying for a blog");
        var blog = db.Blogs.FirstOrDefault(d => d.BlogId == id);

        return blog;
    }

    private static void Create(Blog b)
    {
        using var db = new BloggingContext();
        try
        {
            Console.WriteLine($"Inserting a new blog : BlogId :{b.BlogId} Url : {b.Url}");
            db.Add(b);
            db.SaveChanges();
        }
        catch (Exception)
        {
            Console.WriteLine("HATA : BLOG_ID: " + b.BlogId);
            Console.WriteLine("##########################");
        }
        finally
        {
            // db.Dispose();
        }

    }

    private static void Update(Blog blog)
    {
        using var db = new BloggingContext();

        Console.WriteLine("Updating the blog and adding a post");
        blog.Url = "https://devblogs.microsoft.com/dotnet";
        blog.Posts.Add(
            new Post { Title = "Hello World", Content = "I wrote an app using EF Core!" });
        db.SaveChanges();

    }

    private static void Delete(Blog blog)
    {
        using var db = new BloggingContext();
        //Blog blog = GetById(id);
        Console.WriteLine($"Delet this blog : BlogId :{blog.BlogId} Url : {blog.Url}");
        db.Remove(blog);
        db.SaveChanges();
    }

}