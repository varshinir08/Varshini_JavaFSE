package com.example.jwt_auth_service.controller;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt_auth_service.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
@RestController
public class AuthController {
	 @Autowired
	    private JwtUtil jwtUtil;
	 @GetMapping("/authenticate")
	    public ResponseEntity<?> authenticate(HttpServletRequest request) {
	        String authHeader = request.getHeader("Authorization");

	        if (authHeader == null || !authHeader.startsWith("Basic ")) {
	            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
	        } 
	        String base64Credentials = authHeader.substring("Basic ".length());
	        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
	        String credentials = new String(credDecoded);
	        String[] values = credentials.split(":", 2);

	        String username = values[0];
	        String password = values[1]; 
	        if ("user".equals(username) && "pwd".equals(password)) {
	            String token = jwtUtil.generateToken(username);
	            return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
	        } else {
	            return ResponseEntity.status(403).body("Invalid credentials");
	        }
	    }

}
