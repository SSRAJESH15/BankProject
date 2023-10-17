package com.example.UserRepo;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.Entity.Customer;

    @Repository
    public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findByUsername(String username);
    Optional<Customer> findByEmail(String email);
    Optional<Customer> findByAddharNo(String AddharNo);
    Optional<Customer> findByAccountNo(String AccountNo);

}

