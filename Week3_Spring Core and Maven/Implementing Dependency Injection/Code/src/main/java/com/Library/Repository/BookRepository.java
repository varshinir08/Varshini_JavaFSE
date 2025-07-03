package com.Library.Repository; 
import org.springframework.stereotype.Repository;
@Repository
public class BookRepository {
	public String getBook() {
        return "Spring in Action";
    }
}
