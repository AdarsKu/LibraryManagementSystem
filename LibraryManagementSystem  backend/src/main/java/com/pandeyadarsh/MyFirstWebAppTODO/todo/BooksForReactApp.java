package com.pandeyadarsh.MyFirstWebAppTODO.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksForReactApp {

	@Autowired
	private BooksRepository todoRepo;
	
	@GetMapping("/basicauth")
	public String basicAuthCheck() {
		return "Success";
	}
	
	@GetMapping("/Books/{type}")
	public List<Books> getAllTodoOfUser(@PathVariable String type) {
		return todoRepo.findByBookType(type);
	
	}
}
