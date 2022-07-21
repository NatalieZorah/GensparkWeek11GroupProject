package com.genspark.Pucci.Entities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="tbl_orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_id;

    @Autowired
    @Column(name = "purchase_list")
    @ElementCollection
    private List<Product> purchase_list;

    @Column(nullable = false, updatable = false)
    @CreatedDate
    private LocalDateTime createdOn = LocalDateTime.now();

    private double purchase_total;

    private int user_id;

    //optional fields. commented out for now.
//    @LastModifiedBy
//    private String modifiedBy = null;
//
//    @LastModifiedDate
//    private LocalDateTime updatedOn = null;

    public Order(){}

    public Order(List<Product> purchase_list, double purchase_total, int user_id) {
        this.purchase_list = purchase_list;
        this.purchase_total = purchase_total;
        this.user_id = user_id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public List<Product> getPurchase_list() {
        return purchase_list;
    }

    public void setPurchase_list(List<Product> purchase_list) {
        this.purchase_list = purchase_list;
    }

    public double getPurchase_total() {
        return purchase_total;
    }

    public void setPurchase_total(double purchase_total) {
        this.purchase_total = purchase_total;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedAt(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
