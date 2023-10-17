package com.example.UserService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Entity.Customer;
import com.example.ExceptionClasses.CustomerNotFoundException;
import com.example.ExceptionClasses.InsufficientFundsException;
import com.example.UserRepo.CustomerRepository;

@Service
public class CustomerService {


        @Autowired
        private CustomerRepository customerRepository;

        public Optional<Customer> findByUsername(String username) {
            return customerRepository.findByUsername(username);
        }
    
        public Optional<Customer> findByEmail(String email) {
            return customerRepository.findByEmail(email);
        }
        public Optional<Customer> findByAddharNo(String AddharNo) {
            return customerRepository.findByAddharNo(AddharNo);
        }
    
        public Optional<Customer> findByAccountNo(String AccountNo) {
            return customerRepository.findByAccountNo(AccountNo);
        }

        public Customer saveCustomer(Customer customer) {
            return customerRepository.save(customer);
        }
        public List<Customer> getAllCustomer() {
            return customerRepository.findAll();
        }

        public synchronized Customer deposit(String accountNumber, double amount) {
            Optional<Customer> customerOptional = customerRepository.findByAccountNo(accountNumber);
            if (customerOptional.isPresent()) {
                Customer customer = customerOptional.get();
                customer.setCustomerAmount(customer.getCustomerAmount() + amount);
                return customerRepository.save(customer);
            }
            throw new CustomerNotFoundException("Customer not found with account number: " + accountNumber);
        }
    
        public synchronized Customer withdraw(String accountNumber, double amount) {
            Optional<Customer> customerOptional = customerRepository.findByAccountNo(accountNumber);
            if (customerOptional.isPresent()) {
                Customer customer = customerOptional.get();
                if (customer.getCustomerAmount() >= amount) {
                    customer.setCustomerAmount(customer.getCustomerAmount() - amount);
                    return customerRepository.save(customer);
                } else {
                    throw new InsufficientFundsException("Insufficient funds for withdrawal");
                }
            }
            throw new CustomerNotFoundException("Customer not found with account number: " + accountNumber);
        }
                
        public Customer updateCustomer(String id, Customer updatedCustomer) {
            Customer existingCustomer = customerRepository.findById(id).orElse(null);
            if (existingCustomer != null) {
                existingCustomer.setUsername(updatedCustomer.getUsername());
                existingCustomer.setEmail(updatedCustomer.getEmail());
                existingCustomer.setAddharNo(updatedCustomer.getAddharNo());
                existingCustomer.setPhone(updatedCustomer.getPhone());
                return customerRepository.save(existingCustomer);
            }
            return null;
        }

        public boolean deleteCustomer(String id) {
            if (customerRepository.existsById(id)) {
                customerRepository.deleteById(id);
                return true;
            }
            return false;
        }
    
}
