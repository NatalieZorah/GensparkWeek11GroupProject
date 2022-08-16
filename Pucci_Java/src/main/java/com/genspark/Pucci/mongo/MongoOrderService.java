package com.genspark.Pucci.mongo;

import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Payload.request.order.MongoOrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoOrderService {

    @Autowired
    MongoOrderRepository orderRepository;
    public List<MongoOrder> getAllOrders() {
        List<MongoOrder> mongoOrders = new ArrayList<>();
        orderRepository.findAll().forEach(mongoOrders::add);
        return mongoOrders;
    }

    public MongoOrder addOrder(MongoOrderRequest mongoOrderRequest, User user) {
        int purchaseSubTotal = 0;
        for(Product purchase: mongoOrderRequest.getPurchase_list()){
            purchaseSubTotal += purchase.getPrice();
        }
        int shipping = 20;
        double tax = 0.11;
        int purchaseTotal = (int) ((purchaseSubTotal * tax) + purchaseSubTotal + shipping);
        return orderRepository.save(new MongoOrder(mongoOrderRequest.getPurchase_list(), String.valueOf(user.getUser_id()), purchaseTotal));
    }
}
