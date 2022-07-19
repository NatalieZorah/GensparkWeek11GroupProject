package com.genspark.Pucci.Controllers;


import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.*;
import com.genspark.Pucci.Payload.request.auth.SignupRequest;
import com.genspark.Pucci.Payload.response.MessageResponse;
import com.genspark.Pucci.Services.*;
import com.genspark.Pucci.security.jwt.JwtUtils;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
<<<<<<< refs/remotes/awsaylot/main

=======
>>>>>>> Added Security


@RestController
public class Controller {

    @Autowired
    private OrderServiceInterface orderService;

    @Autowired
    private ProductServiceInterface productService;

    @Autowired
    private UserServiceInterface userService;

    @Autowired
    private MailSenderService mailSenderService;

    @Autowired
    private CartServiceInterface cartService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDao userDao;

    @GetMapping("/api/sendmail")
    public void sendMail(){
        this.mailSenderService.sendMail("quyenh678@gmail.com", "Pucchi Order Confirmation", "Hello! This is a message from Pucchi.");
    }

    @GetMapping("/api/orders")
    public List<Order> getOrders() {
        return this.orderService.getAllOrders();
    }

    @GetMapping("/api/orders/{order_id}")
    public Order getOrderById(@PathVariable String order_id) {
        return this.orderService.getOrderById(Integer.parseInt(order_id));
    }

    @PostMapping("/api/orders")
    public Order addOrder(@RequestBody Order order) {
        return this.orderService.addOrder(order);
    }


    @PutMapping("/api/orders")
    public Order updateOrder(@RequestBody Order order) {
        return this.orderService.updateOrder(order);
    }

    @DeleteMapping("/api/orders/{order_id}")
    public String deleteOrder(@PathVariable String order_id) {
        return this.orderService.deleteOrder(Integer.parseInt(order_id));
    }

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping("/api/products/{product_id}")
    public Product getProductById(@PathVariable String product_id) {
        return this.productService.getProductById(Integer.parseInt(product_id));
    }

    @PostMapping("/api/products")
    public Product addProduct(@RequestBody Product product) {
        System.out.println(product.getName());
        return this.productService.addProduct(product);
    }


    @PutMapping("/api/products")
    public Product updateProduct(@RequestBody Product product) {
        return this.productService.updateProduct(product);
    }


    @DeleteMapping("/api/products/{product_id}")
    public String deleteProduct(@PathVariable String product_id) {
        return this.productService.deleteProduct(Integer.parseInt(product_id));
    }

    @GetMapping("/api/users")
    public List<User> getUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/api/users/{user_id}")
    public User getUserById(@PathVariable String user_id) {
        return this.userService.getUserById(Integer.parseInt(user_id));
    }

    @PostMapping("/api/users")
    public User addUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @PutMapping("/api/users")
    public User updateUser(@RequestBody User user) {
        return this.userService.updateUser(user);
    }

    @DeleteMapping("/api/users/{user_id}")
    public String deleteUser(@PathVariable String user_id) {
        return this.userService.deleteUser(Integer.parseInt(user_id));
    }


}
