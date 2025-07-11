package com.cognizant.springxmlcountry.controller;
import com.cognizant.springxmlcountry.model.Country;
import com.cognizant.springxmlcountry.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
public class CountryController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START getCountry");
        Country country = countryService.getCountry(code);
        LOGGER.info("END getCountry");
        return country;
    }

}
