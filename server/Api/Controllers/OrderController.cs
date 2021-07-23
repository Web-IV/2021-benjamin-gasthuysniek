using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webshop.Data.Interfaces;
using Webshop.DTOs;
using Webshop.Models.Domain;

namespace Webshop.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepo;
        private readonly IUserRepository _userRepo;
        private readonly IProductRepository _productRepo;

        // private User _loggedInUser;
        public OrderController(IOrderRepository context, IUserRepository userRepo, IProductRepository productRepo)
        {
            _orderRepo = context;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }

        // GET: api/orders
        /// <summary>
        /// Get all the orders of user with userid 
        /// </summary>
        /// <returns>Array of the orders with the given userid, if no userid is giv </returns>
        [HttpGet]
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
        public ActionResult<Order> PostOrder( OrderDTO order )
        {
           
            User user = new User();
            User loggedInUser = _userRepo.GetByEmail(User.Identity.Name);
            user = loggedInUser;
            Order newOrder = new Order(user); 
            loggedInUser.OrderListOfUser.Add(newOrder);
        
            _orderRepo.Add(newOrder);
            _orderRepo.SaveChanges();
            //creates a response
            return CreatedAtAction
                //string actionname
                (nameof(GetOrder), new { id = newOrder.Id },newOrder );

        }
       
        //Put: api/order/id/
        /// <summary>
        /// Adding product to current order
        /// </summary>
        /// <param name="orderid">orderid</param>
        /// <param name="product">The product we want to add</param>
        /// <param name="aantal">The amount of the product we want to add</param>
        //     /// <param name="orderId">Id of the order</param>
        //[HttpPut("{id}")]
        [HttpPut("orderId")]
        public ActionResult AddProductToOrder(ProductDTO product, int aantal,int orderid)//,int orderid)
        {

           // Order order;
            /*try
            {
                User loggedInUser = _userRepo.GetByEmail(User.Identity.Name);
                Product productToAdd = _productRepo.GetById(productId);
                order = _orderRepo.GetById(orderid);
                order.VoegContentToe(productToAdd, aantal);


                _userRepo.Update(loggedInUser);
                _userRepo.SaveChanges();
                _orderRepo.Update(order);
                _orderRepo.SaveChanges();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
            return Ok(order);*/
            if(!_orderRepo.TryGetOrder(orderid, out var order))
            {
                return NotFound(); 
            }
            // public Product(string productclass, string productname,int unitPrice,string description, int? amount=null):this()
            //ProductClass productClass = new ProductClass() { Name = product.ProductName };
            var productToCreate = new Product(product.ProductName, product.ProductClass,product.UnitPrice, product.Description
                //,aantal
                );
            
            order.VoegContentToe(productToCreate, aantal);
            _orderRepo.SaveChanges();
            return CreatedAtAction("GetProduct", new { id = order.Id, productid = productToCreate.Id }, productToCreate);
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
            try { 
            Order orderThatNeedsDeleting = _orderRepo.GetById(id);
          /*  if (orderThatNeedsDeleting == null)
            {
                return BadRequest();
            }*/
            
            _orderRepo.Delete(orderThatNeedsDeleting);
            _orderRepo.SaveChanges();
            return NoContent();
            }catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

