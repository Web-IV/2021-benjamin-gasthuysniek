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
        public OrderLine(Order order, Product product, int amount
            //An order consists of multiple orderlines
            )
        {
            Order = order;
            OrderId = order.Id;

            Product = product;
            ProductId = product.Id;
            ProductAmount = amount;
        }
    }
}

