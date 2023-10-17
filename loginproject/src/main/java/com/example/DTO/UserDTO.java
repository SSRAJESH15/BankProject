package com.example.DTO;

public class UserDTO {
    private String id;
    private String email;
    private String username;
    private String password;
    private String ConfirmPassword;

    public UserDTO() {
    }
    public UserDTO(String id, String email, String username, String password, String ConfirmPassword) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.ConfirmPassword=ConfirmPassword;
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
    
}