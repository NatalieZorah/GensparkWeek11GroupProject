package com.genspark.Pucci.Services;

import com.genspark.Pucci.Daos.UserDao;
import com.genspark.Pucci.Entities.User;
import com.genspark.Pucci.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserServiceInterface{
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    private UserDao userDao;


    @Override
    public List<User> getAllUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUserById(int user_id) {
        Optional <User> u = this.userDao.findById(user_id);
        User user = null;

        if (u.isPresent()) {
            user = u.get();
        } else {
            throw new RuntimeException("User not found for id :: " + user_id);
        }
        return user;
    }

    @Override
    public User addUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public User updateUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public String deleteUser(int user_id) {
        this.userDao.deleteById(user_id);
        return "User " + user_id + " has been deleted";
    }

    public User getUserFromHeader(String authHeader) {
        String jwt = authHeader.split("\\s+")[1];
        String username = jwtUtils.getUserNameFromJwtToken(jwt);
        User user = this.userDao.findByUsername(username).orElse(null);
        return user;
    }
}
