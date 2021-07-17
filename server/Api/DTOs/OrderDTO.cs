using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Webshop.Models.Domain;

namespace Webshop.DTOs
{
    public class OrderDTO
    {
        [Required]
        public int OrderId { get; set; }
        public IEnumerable<ProductDTO>Products {get;set;}
        
        public double OrderTotaal { get; set; }
       
       public int UserId { get; set; }
       /*public OrderDTO()
        {

        }
       public OrderDTO(Order order):this()
        {
            OrderId = order.Id;
            OrderTotaal = order.OrderTotaal;
            UserId = order.UserId;
         }
        */
    }
}
