using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Webshop.Models.Domain
{
    public class FavoriteProduct
    {
       // public int Id { get; set; }
        public int ProductID { get; set; }
        //public string ProductName { get; set; }
        public Product Product { get; set; }
        public int Userid { get; set; }
        //public string UserName { get; set; }
        //public string UserID { get; set; }
        //[ForeignKey(nameof(UserID))]
        public User User { get; set; }
       /* public FavoriteProduct(int userID, int productID)
        {
            User.UserId = userID;
            Product.ProductId = productID;
            //ProductID = product.ProductId;
            ProductName = Product.ProductName;
            Userid = User.UserId;
            
        }
        public FavoriteProduct()
        {

        }*/
    }
}
