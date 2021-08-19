using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webshop.Data.Interfaces;
using Webshop.Data.Repositories;
using Webshop.DTOs;
using Webshop.Models.Domain;

namespace Webshop.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _orderRepo;
        private readonly IUserRepository _userRepo;
        private readonly IProductRepository _productRepo;
        private readonly IOrderlineRepository _orderLineRepository;

        // private User _loggedInUser;
        public OrdersController(IOrderRepository context, IUserRepository userRepo, IProductRepository productRepo, IOrderlineRepository orderLineRepo)
        {
            _orderRepo = context;
            _userRepo = userRepo;
            _productRepo = productRepo;
            _orderLineRepository = orderLineRepo;
        }

        // GET: api/orders
        /// <summary>
        /// Get all the orders of user with userid 
        /// </summary>
        /// <returns>Array of the orders with the given userid, if no userid is giv </returns>
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Order> GetOrders(string product = null, int userid = -1)
        {
            //when nothing is given as a parameter, all products are returned
            /* try
             {

                     //.GetByEmail(User.Identity.Name);
                 int useridconverted = int.Parse(userId);
                 User loggedInUser = _userRepo.GetById(useridconverted);
                 if (useridconverted == -1)
                 {
                     return _orderRepo.GetAll();
                 }
                 return _orderRepo.GetByUser(loggedInUser
                     // useridconverted
                     );
             }catch(Exception ex)
             {
               return  _orderRepo.GetAll();
             }*/
            if (string.IsNullOrEmpty(product) && userid == -1)
                return _orderRepo.GetAll();
            return _orderRepo.GetBy(userid, product);
        }

        //Get: Api/orders/id
        /// <summary>
        /// Get orders by id
        /// </summary>
        /// <param name="id">The id of the order</param>
        /// <returns>The order</returns>

        [HttpGet("{id}")]
        public ActionResult<Order> GetOrder(int id)
        {

            Order order = _orderRepo.GetById(id);
            if (order == null) return NotFound();
            return order;
        }

        //Post: api/orders
        /// <summary>
        /// Add a new order
        /// </summary>        
        [HttpPost]
        //[Route("[Action]")]
        public ActionResult<Order> PostOrder(OrderDTO order)
        {

            User user = new User();
            User loggedInUser = _userRepo.GetByEmail(User.Identity.Name);
            user = loggedInUser;
            Console.WriteLine("The line after the post order logged in user is retrieved");
            Console.WriteLine(user);
            Order newOrder = new Order() { User = loggedInUser };
            foreach (var ol in order.OrderLines)
            {
                ol.Product = _productRepo.GetById(ol.ProductId);
                newOrder.VoegContentToe(ol);
            }
            Console.WriteLine("the loggedin user"); Console.WriteLine(loggedInUser);
            Console.WriteLine("the new order"); Console.WriteLine(newOrder);
            loggedInUser.OrderListOfUser.Add(newOrder);
            _userRepo.Update(loggedInUser);
            _orderRepo.Add(newOrder);
            _orderRepo.SaveChanges();
            _userRepo.Update(user);
            _userRepo.SaveChanges();
            //creates a response
            return CreatedAtAction
                //string actionname
                (nameof(GetOrder), new { id = newOrder.Id }, newOrder);


        }

        //PUT: api/Orders/5
        /// <summary>
        /// Adding product to current order
        /// </summary>
        /// <param name="order">the order we want the product to be added to</param>      
         /// <param name="id">id of the order we wabt to add the product to</param>
        [HttpPut("{id}")]
        public ActionResult AddProductToOrder(Order order, int id)//,int orderid)
        {
            if (order.Id != id)
            {
                return BadRequest();
            }
            _orderRepo.Update(order);
            _orderRepo.SaveChanges();
            return NoContent();
        }


        //Delete: api/Order/id
        /// <summary>
        /// Deleting an order
        /// </summary>
        /// <param name="id">The orderid of the order that needs to be deleted</param>
        //[HttpDelete("{id}")]
        [HttpDelete("{id}")]
        public ActionResult DeleteOrder(int id)
        {
            try
            {
                Order orderThatNeedsDeleting = _orderRepo.GetById(id);
                /*  if (orderThatNeedsDeleting == null)
                  {
                      return BadRequest();
                  }*/

                _orderRepo.Delete(orderThatNeedsDeleting);
                _orderRepo.SaveChanges();
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

