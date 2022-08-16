package com.genspark.Pucci.Payload.request.order;

import com.genspark.Pucci.Entities.Product;
import com.genspark.Pucci.mongo.MongoOrder;

import java.util.ArrayList;
import java.util.List;

public class MongoOrderRequest {
    List<Product> purchase_list = new ArrayList<>();

    public MongoOrderRequest() {
    }


    public List<Product> getPurchase_list() {
        return purchase_list;
    }



    public void setPurchase_list(List<Product> purchase_list) {
        this.purchase_list = purchase_list;
    }

    public MongoOrderRequest(List<Product> purchase_list) {
        this.purchase_list = purchase_list;
    }
}
