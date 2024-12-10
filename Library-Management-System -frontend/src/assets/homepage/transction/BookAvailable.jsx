import { useState } from "react";


const BookAvailability = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredBooks, setFilteredBooks] = useState([]);

  // Sample data for books
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true },
    { id: 2, title: '1984', author: 'George Orwell', isAvailable: false },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: true },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', isAvailable: false },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', isAvailable: true },
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term)
    );
    setFilteredBooks(results);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book Availability</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by Book Name or Author Name"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      />

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Book Title</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Author Name</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Availability</th>
          </tr>
        </thead>
        <tbody>
          {(searchTerm ? filteredBooks : books).map((book) => (
            <tr key={book.id}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{book.author}</td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  textAlign: 'center',
                  color: book.isAvailable ? 'green' : 'red',
                }}
              >
                {book.isAvailable ? 'Available' : 'Not Available'}
              </td>
            </tr>
          ))}
          {(searchTerm && filteredBooks.length === 0) && (
            <tr>
              <td colSpan="3" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookAvailability;