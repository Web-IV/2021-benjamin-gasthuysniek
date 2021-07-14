using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webshop.Models.Domain
{
    public class Product
    {
        #region properties
        public int Id { get; set;}
        public string ProductClass { get; set; }
        public string ProductName { get; set; }
        public int UnitPrice { get; set; }
        //public int AantalOpOrder { get; set; } 
        public int? Amount { get; set; }
        #endregion
        //public ICollection<User> Users { get; set; }
        public User User { get; set; }
       // public ICollection<Order> ListOfOrder { get; set; }
       // public ICollection<Order> OrderListTotWieDitProductBehoord { get; set; }
       //public ICollection<OrderLine> OrderLines { get; set; }
        #region ctors
       
        public Product(string productclass, string productname,int unitPrice,int? amount=null):this()
        {
            
            ProductClass = productclass;
            ProductName = productname;
            UnitPrice = unitPrice;
            Amount = amount;
          
        }
        public Product()
        {
            //AantalOpOrder = 0;
            //  OrderListTotWieDitProductBehoord = new List<Order>();
          //  OrderLines = new List<OrderLine>();
           
        }
        #endregion
    }
}
