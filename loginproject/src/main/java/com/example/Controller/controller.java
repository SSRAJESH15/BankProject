package com.example.Controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.Entity.Customer;
import com.example.Entity.User;
import com.example.UserService.CustomerService;
import com.example.UserService.UserService;

// import java.util.concurrent.TimeUnit;
// import com.google.common.cache.CacheBuilder;
// import com.google.common.cache.CacheLoader;
// import com.google.common.cache.LoadingCache;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class controller {


    @Autowired
    private UserService userService;

    @Autowired
    private CustomerService customerService;

    // CacheLoader<String, String> loader = new CacheLoader<String, String>() {

    //     @Override
    //     public String load(String key) {
    //         return key;
    //     }
    // };

    // // Guava Cache with a cache expiration of 1 minute
    // LoadingCache<String, String> cache = CacheBuilder.newBuilder()
    //   .maximumSize(50)
    //   .expireAfterWrite(1,TimeUnit.MINUTES)
    //   .build(loader);



    // @PostMapping("/register")
    // public ResponseEntity<String> registerUser(@RequestBody User user) {
    //     // userRepository.save(user);

    //         // Put user data into cache
    //         cache.getUnchecked(user.getEmail());
    //         System.out.println(cache.getIfPresent(user.getEmail()));
    //     return ResponseEntity.ok(user.getUserType());
    // }

    // @PostMapping("/login")
    // public ResponseEntity<String> login(@RequestBody User user) {
    //     System.out.println(user.getUsername()+" "+user.getEmail()+" "+user.getPassword());

    //     String cachedEmail = cache.getIfPresent(user.getEmail());
    //     System.out.println("cachedEmail "+cachedEmail);
    //     if ((cachedEmail != null && cachedEmail.equals(user.getEmail()))) {
    //         return ResponseEntity.ok(user.getUserType());
    //     }
    //     else {
    //         return ResponseEntity.status(401).body("email is already exits or cache time e...");
    //     }
    // }




    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()).isPresent() ||
            userService.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username or email already exists!");
        }
        userService.saveUser(user);
        return ResponseEntity.ok(user.getUserType());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        Optional<User> user1 = userService.findByEmail(user.getEmail());
        if (user1 != null && user1.get().getPassword().equals(user.getPassword()) 
        && user1 != null && user1.get().getUserType().equals(user.getUserType())) {
            return ResponseEntity.ok(user1.get().getUserType());
        } else {
            return ResponseEntity.status(401).body(null);
        }
    }


    @PutMapping("/customers/update/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String id, @RequestBody Customer updatedCustomer) {
        Customer customer = customerService.updateCustomer(id, updatedCustomer);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/customers/delete/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String id) {
        boolean isDeleted = customerService.deleteCustomer(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/addcustomer")
    public ResponseEntity<String> CustomerAccount(@RequestBody Customer customer) {
        if (customerService.findByUsername(customer.getUsername()).isPresent() ||
            customerService.findByEmail(customer.getEmail()).isPresent() || 
            customerService.findByAddharNo(customer.getAddharNo()).isPresent() ||
            customerService.findByAccountNo(customer.getAccountNo()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username, email, AddharNo or AccountNo already exists!");
        }
        customerService.saveCustomer(customer);
        return ResponseEntity.ok(customer.getUsername());
    }

    @PostMapping("/deposit")
    public Customer deposit(@RequestParam String accountNo, @RequestParam double amount) {
        return customerService.deposit(accountNo, amount);
    }

    @PostMapping("/withdraw")
    public Customer withdraw(@RequestParam String accountNo, @RequestParam double amount) {
        return customerService.withdraw(accountNo, amount);
    }


    @GetMapping("/getAllUser")
    public List<User> AllUser(){
        return userService.getAllUser();
    }
    
    @GetMapping("/getcustomer")
    public List<Customer> AllCustomer(){
        return customerService.getAllCustomer();
    }

}
