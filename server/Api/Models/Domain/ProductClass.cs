using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webshop.Models.Domain
{
    public class ProductClass
    {
        #region properties
        public int Id { get; set; }

        public string Name { get; set; }
        #endregion

        #region ctors

        public ProductClass (string name):this()
        {
            Name = name;
        }

        public ProductClass()
        {

        }

        #endregion
    }
}
