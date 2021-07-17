﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webshop.Data.Interfaces;
using Webshop.DTOs;
using Webshop.Models.Domain;

namespace Webshop.Data.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Order> _orders;
        public OrderRepository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
            _orders = dbContext.Order;
        }
        public IEnumerable<Order> GetAll()
        {
            return _orders.Include(o => o.Products).ToList();
        }
       
        public Order GetById(int id)
        {
            return _orders.Include(o => o.Products).SingleOrDefault(o => o.Id == id);
        }

        public bool TryGetOrder(int id, out Order order)
        {
            order = _context.Order.Include(o => o.Products).FirstOrDefault(o => o.Id == id);
            return order != null;
        }

        public void Add(Order order)
        {
           _orders.Add(order);
        }
        public void Update(Order order)
        {
            _context.Update(order);
        }

        public void Delete(Order order)
        {
            _orders.Remove(order);
        }

      /*  public Order GetById(int id)
        {
            return _orders.Include(o=>o.Products)//.Include(o=>o.User)
                .FirstOrDefault(o => o.Id== id);
        }
        public IEnumerable<OrderDTO> GetByUser(User user=null)
        {
            int userid = user.UserId;
            if (userid ==-1)
                throw new Exception("you are trying to get the orders of a user without giving a userid");
            return GetAll()//.Include(o=>o.User)
               
                .Where(dto => dto.UserId == userid);  
        }
      */
        public void SaveChanges()
        {
            _context.SaveChanges();
        }

       /* public void Update(Order order)
        {
            _context.Update(order);
        }
        public List<OrderDTO> GetAll()
        {
            return ConvertToDTo( _orders.Include(o=>o.Products).ToList());
        }
        public List<OrderDTO> ConvertToDTo(List<Order> orderLijst)
        {
            return orderLijst.Select(o => new OrderDTO(o)).ToList();
        }

      */
       public IEnumerable<Order> GetBy(string product = null, User user= null)
        {
            var orders = _orders.Include(r => r.Products).AsQueryable();
            if (user != null)
                orders = orders.Where(r => r.User.Equals(user));                
               
            
            if (!string.IsNullOrEmpty(product))
                orders = orders.Where(r => r.Products.Any(i => i.ProductName == product));
            return orders.OrderBy(r => r.CreationDate).ToList();
        }

       
    }
}

