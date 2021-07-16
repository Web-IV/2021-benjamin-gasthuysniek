﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Webshop.Models.Domain;

namespace Webshop.DTOs
{
    public class ProductDTO
    {
       /* [Required]
        public int ProductID { get; set; }*/
        [Required]
        public int UnitPrice { get; set; }
      /*  [Required]*/
        public string ProductClass { get; set; }
        [Required]
        public string ProductName { get; set; }
        public int Amount { get; set; }
       // public User user { get; set; }
        public string Description { get; set; }
       /* public ProductDTO(Product product)
        {//public Product(string productclass, string productname,int unitPrice,string description, int? amount=null):this()
            ProductClass = product.ProductClass;
            ProductName = product.ProductName;
            UnitPrice = product.UnitPrice;
            Description = product.Description;
            Amount = product.Amount.Value;
        }*/
    }
}
