    
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webshop.Models.Domain;


namespace Webshop.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>//, IdentityRole<int>,int>
    {
       /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          // optionsBuilder.UseSqlServer("server = (LocalDB); database = WebShop; Trusted_Connection=True;MultipleActiveResultSets=true");

        }*/
        public DbSet<Comment> Comment { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<User> User { get; set; }
        //public DbSet<OrderLine> OrderLines { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // builder.Entity<>
            #region CommentMapping
            builder.Entity<Comment>().HasKey(c => c.CommentId);

            builder.Entity<Comment>().HasOne(c => c.User).WithMany();
            builder.Entity<Comment>().Property(c => c.PostingDateComment).IsRequired();
            builder.Entity<Comment>().Property(c => c.Content).IsRequired();
            builder.Entity<Comment>().Property(c => c.Title).IsRequired()
                .HasMaxLength(200)
                ;
            #endregion
            #region FavoriteProductMapping
            builder.Entity<FavoriteProduct>().HasKey(fp => new { fp.Userid, fp.ProductID });
           
            builder.Entity<FavoriteProduct>().HasOne(fp => fp.Product)
                .WithMany()
                .HasForeignKey(fp => fp.ProductID)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<FavoriteProduct>().HasOne(fp => fp.User)
               .WithMany(u => u.Favorites)
               .HasForeignKey(fp => fp.Userid);
            #endregion
            #region OrderlineMapping
            //builder.Entity<Order>().HasKey(o => o.Id);     
           /* builder.Entity<OrderLine>().HasKey(ol => new { ol.OrderId, ol.ProductId });
            builder.Entity<OrderLine>().HasOne(ol => ol.Product).WithMany(p => p.OrderLines).HasForeignKey(ol=> ol.ProductId);
            builder.Entity<OrderLine>().HasOne(ol => ol.Order).WithMany(o => o.OrderLines).HasForeignKey(ol=> ol.OrderId);
            builder.Entity<OrderLine>().Property(ol => ol.OrderId);
            builder.Entity<OrderLine>().Property(ol => ol.ProductId);
            builder.Entity<OrderLine>().Property(ol => ol.ProductAmount);*/
            #endregion
            #region OrderMapping
            builder.Entity<Order>().Property(o => o.OrderTotaal);
            //builder.Entity<Order>().Property(o => o.Products);
            //   builder.Entity<Order>().Property(o=> o.)
            builder.Entity<Order>().HasMany(o => o.Products).WithOne().OnDelete(DeleteBehavior.Restrict);
            builder.Entity<Order>().HasOne(o => o.User).WithMany().HasForeignKey(o => o.UserId).OnDelete(DeleteBehavior.Cascade);
            
            #endregion
            #region ProductMapping
            builder.Entity<Product>().Property(p => p.UnitPrice).IsRequired();
            //builder.Entity<Product>().HasKey(p => p.Id);
            builder.Entity<Product>().Property(p => p.ProductName).IsRequired();
            builder.Entity<Product>().Property(p => p.ProductClass).IsRequired(false);
            // builder.Entity<Product>().HasMany(p => p.OrderLines).WithOne();
            builder.Entity<Product>().HasKey(p => p.Id);
           
            
            #endregion
            #region Usermapping
           
            builder.Entity<User>().Property(c => c.LastName).IsRequired().HasMaxLength(60);
            builder.Entity<User>().Property(c => c.FirstName).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(c => c.Email).IsRequired().HasMaxLength(100);
            builder.Entity<User>().HasMany(u => u.OrderListOfUser).WithOne(o => o.User).HasForeignKey(o => o.UserId);
                //.OnDelete(DeleteBehavior.Restrict);
            builder.Entity<User>().Ignore(c => c.FavoriteProducts);
            //builder.Entity<User>().Property(u => u.UserName);
            builder.Entity<User>().HasMany(u => u.CommentList).WithOne(c => c.User);
           
            //builder.Entity<User>().Ignore(c=>c.)

            #endregion
            /*builder.Entity<Order>().HasData(
                  new Order
                  {
                      Id = 1,
                      CreationDate = DateTime.Now
                      OrderLines = {
                          new OrderLine{Product = new Product{ Id = 10, ProductName = "Hp Pavilion", ProductClass = "Laptop", UnitPrice = 400 } }
                     /*new Product{ Id = 10, ProductName = "Hp Pavilion", ProductClass = "Laptop", UnitPrice = 400 },
                     new Product{ Id = 11, ProductName = "Razer Blad", ProductClass = "Laptop", UnitPrice = 800 }}

                  }                 
                 // new Order { Id = 2}
   );
   */
            #region OrderlineMapping
            /*  builder.Entity<OrderLine>().HasKey(ol => new { ol.OrderId, ol.ProductId });
              builder.Entity<OrderLine>().HasOne(ol => ol.Order).WithMany().HasForeignKey(ol => ol.OrderId);
              builder.Entity<OrderLine>().HasOne(ol => ol.Product).WithMany().HasForeignKey(ol => ol.ProductId);
              builder.Entity<OrderLine>().Property(ol => ol.ProductAmount).IsRequired();
              */
            #endregion
            builder.Entity<Product>().HasData(
                    //Shadow property can be used for the foreign key, in combination with anaonymous objects
                    new  { Id = 10, ProductName = "Hp Pavilion", ProductClass = "Laptop", UnitPrice = 400 },
                    new { Id = 11, ProductName = "Razer Blad", ProductClass = "Laptop", UnitPrice = 800 }
                 );
        }


    }
}
