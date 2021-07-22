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

        public bool Active { get; set; }
        // public virtual ArrayList<Product, int> OrderContent { get; set; }
        //public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<Product> Products { get; private set; }

        public DateTime CreationDate { get; set; }
        public double OrderTotaal { get; set; }
        public Order()
        {
            // Products = new List<Product>();
            Products = new List<Product>();
            OrderTotaal = 0;
            CreationDate = DateTime.Now;
            //propertie to tell if an order is still active or not, if not the user has checked out order
            Active = true;

        }
        public Order(User user) : this()
        {
            User = user;
            UserId = user.UserId;


        }

        public void VoegContentToe(Product product, int aantal = 1)
        {
            //  product.Amount += aantal;
            //loop for adding products multiple times to order when needed
            for (var i = 0; i < aantal; i++)
                Products.Add(product);
            OrderTotaal += product.UnitPrice * aantal;
        }
        public Product GetProduct(int id) => Products.SingleOrDefault(i => i.Id == id);

    }
}
