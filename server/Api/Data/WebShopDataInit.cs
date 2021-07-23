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
            if (_dbContext.Database.EnsureCreated())
            {

                Product product = new Product("Strix rog", "Laptop", 300, "Good laptop"
                    // ,1
                    );
                //{ ProductClass = productClass};//  public Product(string productclass, string productname,int unitPrice,string description, int? amount=null):this();
                _dbContext.Product.Add(product);
                _dbContext.SaveChanges();
                User customer2 = new User { Email = "niek.gasthuys.y9891@student.hogent.be", FirstName = "Niek", LastName = "Gasthuys" };
                User customer = new User() { Email = "webshop@gmail.com", FirstName = "Niekje", LastName = "Gasthuyst" };
                _dbContext.User.Add(customer);
                _dbContext.Add(customer2);
                customer.AddFavoriteProduct(_dbContext.Product.First());
                Order order = new Order() { User=customer};
                order.VoegContentToe(product, 1);
                _dbContext.Order.Add(order);
                
                // customer.CreateOrder();
                //customer.AddProductToOrder(_dbContext.Product.First(), 2,order.Id);
                //await CreateUser(customer2.Email, "qnyjaa7@N8952");

                //customer.CreateOrder();
                //_dbContext.SaveChanges();
                //ERROR ZIT HIER !!!

                //customer.AddProductToOrder(product, 2);
                /*User student = new User() { Email = "kristel.moyaert@hotmail.com", FirstName = "Kristel", LastName = "Moyaert" };
                _dbContext.User.Add(student);
                student.AddFavoriteProduct(_dbContext.Product.First());                
                await CreateUser(student.Email, "W@8twoord123");
                _dbContext.SaveChanges();

               */
            

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
        
      /*  public async Task InitializeData()
        {
            User customer = new User { Email = "webshop@gmail.com", FirstName = "Niek", LastName = "Gasthuys" };
            _dbContext.User.Add(customer);
            customer.AddFavoriteProduct(_dbContext.Product.First());
            await CreateUser(customer.Email, "W@8twoord123");
            User student = new User { Email = "kristel.moyaert@hotmail.com", FirstName = "Kristel", LastName = "Moyaert" };
            _dbContext.User.Add(student);
            student.AddFavoriteProduct(_dbContext.Product.First());
            // student.AddFavoriteRecipe(_dbContext.Recipes.First());
            await CreateUser(student.Email, "W@8twoord123");
            _dbContext.SaveChanges();
        }*/
       /* public ActionResult<> InitializeData()
        {
            Product product = new Product("laptop", "Strix rog", 300);
            _dbContext.Product.Add(product);
        }*/

    }
}
