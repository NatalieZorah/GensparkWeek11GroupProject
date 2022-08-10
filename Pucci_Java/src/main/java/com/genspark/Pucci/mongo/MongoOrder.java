package com.genspark.Pucci.mongo;

import com.genspark.Pucci.Entities.Product;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;

@Document
public class MongoOrder {
    @Id

    private String _id;

    private List<Product> purchase_list;

    private String user_id;
    private double purchase_total;

    public String getOrder_id() {
        return _id;
    }

    public void setOrder_id(String order_id) {
        this._id = order_id;
    }

    public List<Product> getPurchase_list() {
        return purchase_list;
    }

    public void setPurchase_list(List<Product> purchase_list) {
        this.purchase_list = purchase_list;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
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

    public void setCreatedOn(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    private LocalDateTime createdOn = LocalDateTime.now();

    public MongoOrder(List<Product> purchase_list, String user_id, double purchase_total) {
        this.purchase_list = purchase_list;
        this.user_id = user_id;
        this.purchase_total = purchase_total;
    }

    @Override
    public String toString() {
        return "MongoOrder{" +
                "_id='" + _id + '\'' +
                ", purchase_list=" + purchase_list +
                ", user_id='" + user_id + '\'' +
                ", purchase_total=" + purchase_total +
                ", createdOn=" + createdOn +
                '}';
    }
}
