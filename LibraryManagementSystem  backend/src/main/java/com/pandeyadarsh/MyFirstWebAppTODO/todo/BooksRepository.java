package com.pandeyadarsh.MyFirstWebAppTODO.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books, Integer>{
   
	public List<Books> findByBookType(String type);
	
}
