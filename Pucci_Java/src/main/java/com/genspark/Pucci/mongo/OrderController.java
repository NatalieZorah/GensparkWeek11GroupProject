package com.genspark.Pucci.mongo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    MongoOrderService orderService;

    @GetMapping("/api/mongo/orders")
    public ResponseEntity<?> getOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
//
//    @GetMapping("/api/orders/{order_id}")
//    public com.genspark.Pucci.Entities.Order getOrderById(@PathVariable String order_id) {
//        return;
//    }
//
    @PostMapping("/api/mongo/orders")
    public ResponseEntity<?> addOrder(@RequestBody Order order) {
        orderService.addOrder(order);
        return new ResponseEntity<>(HttpStatus.OK);
    }
//
//
//    @PutMapping("/api/orders")
//    public com.genspark.Pucci.Entities.Order updateOrder(@RequestBody Order order) {
//        return this.orderService.updateOrder(order);
//    }
//
//    @DeleteMapping("/api/orders/{order_id}")
//    public String deleteOrder(@PathVariable String order_id) {
//        return this.orderService.deleteOrder(Integer.parseInt(order_id));
//    }

}
