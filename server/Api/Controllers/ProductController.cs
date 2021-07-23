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
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepo;
        private readonly IUserRepository _userRepository;
        private readonly IFavoriteProductRepository _favoiteProductRepo;
        public ProductController(IProductRepository context,IUserRepository userRepository)
        {
            _productRepo = context;
            _userRepository = userRepository;
        }

        // GET: api/products
        /// <summary>
        /// Get all the products ordered by productname 
        /// </summary>
        /// <param name="productname"></param>
        /// <returns>Array of products</returns>
        [HttpGet]
        public IEnumerable<Product> GetProductsByProductName(string productname = null)
        {
            //when nothing is given as a parameter, all products are returned
            if (string.IsNullOrEmpty(productname))
            {
                return _productRepo.GetAll();
            }
            return _productRepo.GetByProductName(productname);
        }

        //Get: Api/products/id
        /// <summary>
        /// Get products by id
        /// </summary>
        /// <param name="id">The id of the product</param>
        /// <returns>The product</returns>
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            Product product = _productRepo.GetById(id);
            if (product == null) return NotFound();
            return product;
        }

        //Post: api/products
        /// <summary>
        /// Add a new product
        /// </summary>
        /// <param name="product">New product</param>
        [HttpPost]
        public ActionResult<Product> PostProduct(ProductDTO product)
        {

            User user = _userRepository.GetByEmail(User.Identity.Name);
            Product newProduct = new Product(product.ProductName, product.ProductClass, product.UnitPrice, product.Description
                //,product.Amount
                )
            { User = user}
           ;// { ProductClass = newProductClass}; //{ ProductName = product.ProductName, UnitPrice = product.UnitPrice, ProductClass = product.ProductClass };
            _productRepo.Add(newProduct);
            _productRepo.SaveChanges();
            //creates a response
            return CreatedAtAction
                //string actionname
                (nameof(GetProduct), new { id = newProduct.Id }, newProduct);
        }
        //Put: api/product/id
        /// <summary>
        /// Modifying a product
        /// </summary>
        /// <param name="product">The product we want to modify</param>
        /// <param name="id">Id of the product</param>
        [HttpPut("{id}")]
        public ActionResult PutProduct(int id, Product product)
        {
            if(product.Id != id)
            {
                return BadRequest();
            }
            _productRepo.Update(product);
            _productRepo.SaveChanges();
            return NoContent();
        }

        //Delete: api/Product/id
        /// <summary>
        /// Deleting a product
        /// </summary>
        /// <param name="id">The productid of the product that needs to be deleted</param>
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(int id)
        {
            Product productNeedsDeleting = _productRepo.GetById(id);
            if(productNeedsDeleting == null)
            {
                return BadRequest();
            }
            _productRepo.Delete(productNeedsDeleting);
            _productRepo.SaveChanges();
            return NoContent();
        }
        /// <summary>
        /// Get favorite products of current user
        /// </summary>
        [HttpGet("Favorites")]
        public IEnumerable<Product> GetFavorites()
        {
            User user = _userRepository.GetByEmail(User.Identity.Name);
            return user.FavoriteProducts;
        }

        /// <summary>
        /// Adding a product to the favorites of the current user given the productId
        /// <paramref name="productId"/>
        /// </summary>
        [HttpPut("AddingFavorite")]
        public ActionResult AddProductToFavorite(int productId)
        {
            Product productNeedsAdding = _productRepo.GetById(productId);
            User userThatNeedsAdding = _userRepository.GetByEmail(User.Identity.Name);
           
            try
            {
                userThatNeedsAdding.AddFavoriteProduct(productNeedsAdding);
                _favoiteProductRepo.Add(new FavoriteProduct(userThatNeedsAdding, productNeedsAdding));
                _favoiteProductRepo.SaveChanges();
                _userRepository.SaveChanges();
                _productRepo.SaveChanges();
                return Ok(productNeedsAdding);
            }
            catch(Exception)
            {
                return BadRequest();
            }        


        }
    }
}