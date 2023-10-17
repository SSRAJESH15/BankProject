package com.example.UserService;
import java.util.List;
import java.util.Optional;
// import java.util.concurrent.TimeUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Entity.User;
import com.example.UserRepo.UserRepository;
// import com.google.common.cache.Cache;
// import com.google.common.cache.CacheBuilder;

@Service
public class UserService {

        @Autowired
        private UserRepository userRepository;

        public Optional<User> findByUsername(String username) {
            return userRepository.findByUsername(username);
        }
    
        public Optional<User> findByEmail(String email) {
            return userRepository.findByEmail(email);
        }
        public Optional<User> findByPassword(String password) {
            return userRepository.findByPassword(password);
        }
    
        public User saveUser(User user) {
            User savedUser = userRepository.save(user);
            return savedUser;
        }

        public List<User> getAllUser(){
            return userRepository.findAll(); 
        }


}