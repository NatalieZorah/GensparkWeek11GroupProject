package com.genspark.Pucci.Controllers;

import com.genspark.Pucci.Daos.ProductDao;
import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.Payload.request.cart.AddCartRequest;
import com.genspark.Pucci.Payload.request.cart.RemoveProduct;
import com.genspark.Pucci.Payload.request.cart.UpdateQuantityRequest;
import com.genspark.Pucci.Services.CartServiceInterface;
import com.genspark.Pucci.Services.UserService;
import com.genspark.Pucci.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired

    private UserService userService;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private CartServiceInterface cartService;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Product> getCart(@RequestHeader("authorization") String authHeader) {
        User user = userService.getUserFromHeader(authHeader);
        List<Product> cart = cartService.getCart(user);
        return cart;
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public Product addToCart(@Valid @RequestBody AddCartRequest addCartRequest, @RequestHeader("authorization") String authHeader) {
        Product product = cartService.addToCart(userService.getUserFromHeader(authHeader), addCartRequest.getProduct_id());
        return product;
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> updateQuantity(@Valid @RequestBody UpdateQuantityRequest updateQuantityRequest, @RequestHeader("authorization") String authHeader) {
        User user = userService.getUserFromHeader(authHeader);
        cartService.changeQuantity(user, Integer.parseInt(updateQuantityRequest.getProduct_id()), Integer.parseInt(updateQuantityRequest.getQuantity()));
        return new ResponseEntity<String>("Updated quantity", HttpStatus.OK);
    }

    @DeleteMapping(value = "/remove", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> removeProduct(@Valid @RequestBody RemoveProduct removeProduct) {
        return new ResponseEntity<String>("Product deleted", HttpStatus.OK);
    }


}
