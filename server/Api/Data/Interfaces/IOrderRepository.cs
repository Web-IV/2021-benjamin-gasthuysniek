using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webshop.DTOs;
using Webshop.Models.Domain;

namespace Webshop.Data.Interfaces
{
    public interface IOrderRepository
    {
        Order GetById(int id);
        //to save all the changes made in the context to the db
        void SaveChanges();
        void Delete(Order order);
        void Add(Order order);
        void Update(Order order);
        List<OrderDTO> GetAll();
        IEnumerable<OrderDTO> GetByUser(User user
            //int userid
            );
       //bool TryGetProductOutOfContent(int productid, out Product product);
    }
}
