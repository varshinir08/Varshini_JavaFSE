package com.cognizant.springxmlcountry.service;
import com.cognizant.springxmlcountry.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CountryService {
	 public Country getCountry(String code) {
	        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
	        List<Country> countries = (List<Country>) context.getBean("countryList");

	        // Use lambda expression for case-insensitive match
	        return countries.stream()
	                .filter(c -> c.getCode().equalsIgnoreCase(code))
	                .findFirst()
	                .orElse(null);
	    }

}
