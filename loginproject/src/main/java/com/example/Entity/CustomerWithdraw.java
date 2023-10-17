package com.example.Entity;

import java.util.concurrent.locks.ReentrantLock;

import org.springframework.data.annotation.Id;

public class CustomerWithdraw {
    @Id
    private String id;
    private String name;
    private double customerAmount;
    private final ReentrantLock lock = new ReentrantLock(); // Reentrant lock for thread safety
    // getters and setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getCustomerAmount() {
        return customerAmount;
    }
    public void setCustomerAmount(double customerAmount) {
        this.customerAmount = customerAmount;
    }
    public ReentrantLock getLock() {
        return lock;
    }
    public CustomerWithdraw(String id, String name, double customerAmount) {
        this.id = id;
        this.name = name;
        this.customerAmount = customerAmount;
    }
    @Override
    public String toString() {
        return "CustomerWithdraw [id=" + id + ", name=" + name + ", customerAmount=" + customerAmount + ", lock=" + lock
                + "]";
    }


    

}
