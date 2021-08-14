using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webshop.DTOs;
using Webshop.Models.Domain;

namespace Webshop.Data
{
    public class WebShopDataInit
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly ILogger<ApplicationDbContext> _logger;
        private readonly UserManager<IdentityUser> _userManager;

        public WebShopDataInit(ApplicationDbContext dbContext,ILogger<ApplicationDbContext> logger,
            UserManager<IdentityUser> userManager
            )
        {
            _dbContext = dbContext;
            _logger = logger;
            _userManager = userManager;
        }
        public async Task InititalizeData()
        {
            _dbContext.Database.EnsureDeleted();
            _dbContext.Database.EnsureCreated();
            if (_dbContext.Database.EnsureCreated())
            {
                
                Product product = new Product("Strix rog", "Laptop", 300, "Good laptop"
                    // ,1
                    );
                //{ ProductClass = productClass};//  public Product(string productclass, string productname,int unitPrice,string description, int? amount=null):this();
                _dbContext.Product.Add(product);
                _dbContext.SaveChanges();
                /*User customer2 = new User { Email = "niek.gasthuys.y9891@student.hogent.be", FirstName = "Niek", LastName = "Gasthuys" };
                User customer = new User() { Email = "webshop@gmail.com", FirstName = "Niekje", LastName = "Gasthuyst" };
                _dbContext.User.Add(customer);
                _dbContext.Add(customer2);*/
                //customer.AddFavoriteProduct(_dbContext.Product.First());
                //Order order = new Order() { User=customer};
                //OrderLine neworderline = new OrderLine() { Product = product, Quantity = 2 };
                //order.VoegContentToe(neworderline);
                //_dbContext.Order.Add(order);
                
                //User user = new User{ Email = "gasthuys.niek@gmail.com", FirstName = "Niek", LastName = "Gasthuys" };
                User customer = new User { Email = "amber.vlerick@gmail.com", FirstName = "Amber", LastName = "Vlerick" };
                //_dbContext.User.Add(user);
                _dbContext.User.Add(customer);
               // await CreateUser(user.Email, "Niek@12345");
                await CreateUser(customer.Email, "Amber@12345");
                _dbContext.SaveChanges();

            
            }
            else
            {
                throw new Exception("The database could not be created");
            }
        }
       public async Task CreateUser(string email, string password)
        {
          
            var user = new IdentityUser { UserName = email, Email=email} ;// { Email = email, UserName = firstname + lastname ,FirstName = firstname, LastName=lastname};
          
            await _userManager.CreateAsync(user, password);
               
          
        }   
        
    
    }
}
