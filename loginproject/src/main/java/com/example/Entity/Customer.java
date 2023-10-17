package com.example.Entity;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addCustomer")
public class Customer {

    @Id
    private String id;
    private String accountNo;
    private String username;
    private String phone;
    private String addharNo;
    private String email;
    private LocalDate dateOfBirth;
    private double customerAmount;
    private String customer;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getAccountNo() {
        return accountNo;
    }
    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddharNo() {
        return addharNo;
    }
    public void setAddharNo(String addharNo) {
        this.addharNo = addharNo;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public double getCustomerAmount() {
        return customerAmount;
    }
    public void setCustomerAmount(double customerAmount) {
        this.customerAmount = customerAmount;
    }
    public String getCustomer() {
        return customer;
    }
    public void setCustomer(String customer) {
        this.customer = customer;
    }
    public Customer(String id, String accountNo, String username, String phone, String addharNo, String email,
            LocalDate dateOfBirth, double customerAmount, String customer) {
        this.id = id;
        this.accountNo = accountNo;
        this.username = username;
        this.phone = phone;
        this.addharNo = addharNo;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.customerAmount = customerAmount;
        this.customer = customer;
    }
    @Override
    public String toString() {
        return "Customer [id=" + id + ", accountNo=" + accountNo + ", username=" + username + ", phone=" + phone
                + ", addharNo=" + addharNo + ", email=" + email + ", dateOfBirth=" + dateOfBirth + ", customerAmount="
                + customerAmount + ", customer=" + customer + "]";
    }
     
}
