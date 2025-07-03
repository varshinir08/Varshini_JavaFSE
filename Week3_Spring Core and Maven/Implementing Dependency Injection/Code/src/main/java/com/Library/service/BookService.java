package com.Library.service;
import com.Library.Repository.BookRepository;
import org.springframework.stereotype.Service;
@Service
public class BookService {
	private BookRepository bookRepository;

     public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Book: " + bookRepository.getBook());
    }

}
