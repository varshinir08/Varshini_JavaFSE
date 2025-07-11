package com.cognizant.springxml;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringxmlApplication {
	 private static final Logger LOGGER = LoggerFactory.getLogger(SpringxmlApplication.class);

	public static void main(String[] args) {
		
		 LOGGER.info("START");
	     SpringApplication.run(SpringxmlApplication.class, args);
	     LOGGER.info("END");
	}

}
