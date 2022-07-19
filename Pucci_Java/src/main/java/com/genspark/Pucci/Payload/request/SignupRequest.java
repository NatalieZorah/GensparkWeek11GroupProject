package com.genspark.Pucci.Payload.request;

import javax.validation.constraints.*;
import java.util.Set;
//String sign_in_type, String name, String username, String password, String email, String phone

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private String signInType;
  @NotBlank
  @Size(min = 3, max = 20)
  private String name;

  public String getSignInType() {
    return signInType;
  }

  public void setSignInType(String signInType) {
    this.signInType = signInType;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  @NotBlank
  @Size(max = 10)
  private String phone;

  private Set<String> role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}
