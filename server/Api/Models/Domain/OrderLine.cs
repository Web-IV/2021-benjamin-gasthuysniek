using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Webshop.Models.Domain
{
    public class OrderLine
    {

        public int OrderId { get; set; }

        public Order Order { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int ProductAmount { get; set; }
        // public Product Product { get; set; }
        /*public OrderLine(
            //Product product, Order order,int amount
            )
        {
            Product = new Product();
            Order = new Order();
            ProductId = Product.Id;
            OrderId = Order.Id;
            //ProductAmount = amount;
        }*/
    }
}

