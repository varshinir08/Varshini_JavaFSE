package com.cognizant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.model.Country;
@Repository
public interface CountryRepository extends JpaRepository<Country, String>{

}
