package com.pandeyadarsh.MyFirstWebAppTODO.todo;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;


@Entity
public class Books
{

	@Id
	@GeneratedValue
	private int id;
	private String bookName;
	private String bookType;
	@Size(min=5,message = "Enter At least 5 character ")
	private String author; 
	private LocalDate date;
	private boolean allocated;

	public Books() {}

	public Books(int id, String username, String description, LocalDate date, boolean done,String type) {
		super();
		this.id = id;
		this.bookName = username;
		this.author = description;
		this.date = date;
		this.allocated = done;
		this.bookType=type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public boolean isAllocated() {
		return allocated;
	}

	public void setAllocated(boolean allocated) {
		this.allocated = allocated;
	}

	public String getBookType() {
		return bookType;
	}

	public void setBookType(String bookType) {
		this.bookType = bookType;
	}

	@Override
	public String toString() {
		return "Books [id=" + id + ", bookName=" + bookName + ", author=" + author + ", date=" + date + ", allocated="
				+ allocated + "]";
	}

	
}
