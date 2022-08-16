package com.genspark.Pucci.mongo;

import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Payload.request.order.MongoOrderRequest;
import com.genspark.Pucci.Services.UserService;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MongoOrderController {

    @Autowired
    MongoOrderService orderService;

    @Autowired
    UserService userService;

    @GetMapping("/api/mongo/orders")
    public ResponseEntity<?> getOrders() {
        List<MongoOrder> mongoOrders = orderService.getAllOrders();
        return new ResponseEntity<>(mongoOrders, HttpStatus.OK);
    }

//    @GetMapping("/api/mongo/orders")
//    public ResponseEntity<?> getordersByUser(Authorization auth) {
//
//        List<MongoOrder> mongoOrders = orderService.getAllOrders();
//        return new ResponseEntity<>(mongoOrders, HttpStatus.OK);
//    }
//
//    @GetMapping("/api/orders/{order_id}")
//    public com.genspark.Pucci.Entities.Order getOrderById(@PathVariable String order_id) {
//        return;
//    }
//
    @PostMapping(value = "/api/mongo/orders", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> addOrder(@RequestBody MongoOrderRequest mongoOrderRequest, @RequestHeader("authorization") String authHeader) {
        User user = userService.getUserFromHeader(authHeader);
        MongoOrder order = orderService.addOrder(mongoOrderRequest, user);
        return new ResponseEntity<>(order, HttpStatus.OK);
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
