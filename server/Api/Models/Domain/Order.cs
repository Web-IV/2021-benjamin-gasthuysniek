using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Webshop.Models.Domain
{
    public class Order
    {
        public int Id { get; set; }
                
        public User User { get; set; }
        
        public int UserId { get; set; }
       
      
       // public virtual ArrayList<Product, int> OrderContent { get; set; }
       //public virtual ICollection<Product> Products { get; set; }
       public virtual ICollection<Product> Products { get; set; }

        public DateTime CreationDate { get; set; }
       public double OrderTotaal { get; set; }
        public Order()
        {
            // Products = new List<Product>();
            Products = new List<Product>();
            OrderTotaal = 0;
            CreationDate = DateTime.Now;
            //propertie to tell if an order is still active or not, if not the user has checked out order
            

        }   
      public Order(User user):this()
        {
            User = user;
            UserId = user.UserId;
            
        }
       
        public void VoegContentToe(Product product, int aantal=1)
        {
            //product.AantalOpOrder = aantal;
            //OrderLines.Add(new OrderLine(product, this));
            // OrderLines.Add(new OrderLine()
            // product,this,aantal)); //
            // { Product = product, ProductId = product.Id, Order = this, OrderId = this.Id, ProductAmount = aantal }); 
            //product.OrderTotWieHijBehoord = this;
           
            product.Amount += aantal;
            Products.Add(product);
            OrderTotaal += product.UnitPrice * aantal;
        }
    }
}
