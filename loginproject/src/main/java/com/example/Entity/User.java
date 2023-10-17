package com.example.Entity;



// import javax.validation.constraints.NotBlank;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Table;
// import javax.validation.constraints.Email;
// import javax.validation.constraints.NotBlank;
// import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
// @Entity
// @Table(name="bank")
public class User {
    
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    // @NotBlank(message = "Email is required")
    // @Size(max = 50)
    // @Email(message = "Please provide a valid email address")
    // @Column(name="email")
    private String email;
    // @NotBlank(message = "Username is required")
    // @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    // @Column(name="username")
    private String username;
    // @NotBlank(message = "Password is required")
    // @Size(min = 6, max = 100, message = "Password must be at least 6 characters")
    // @Column(name="password")
    private String password;
    // @Column(name="ConfirmPassword")
    private String ConfirmPassword;
    private String userType;

    public User() {
    }
    public User(String id, String email, String username, String password, String ConfirmPassword, String userType) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.ConfirmPassword=ConfirmPassword;
        this.userType= userType;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getConfirmPassword() {
        return ConfirmPassword;
    }
    public void setConfirmPassword(String confirmPassword) {
        ConfirmPassword = confirmPassword;
    }
    
    @Override
    public String toString() {
        return "User [id=" + id + ", email=" + email + ", username=" + username + ", password=" + password
                + ", ConfirmPassword=" + ConfirmPassword + "]";
    }
    public String getUserType() {
        return userType;
    }
    public void setUserType(String userType) {
        this.userType = userType;
    }


}