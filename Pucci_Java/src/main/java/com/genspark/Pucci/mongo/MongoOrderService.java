package com.genspark.Pucci.mongo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoOrderService {

    @Autowired
    MongoOrderRepository orderRepository;
    public List<Order> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);
        return orders;
    }

    public void addOrder(Order order) {
        Order _order = orderRepository.save(new Order(order.getPurchase_list(), order.getUser_id(), order.getPurchase_total()));
    }
}
