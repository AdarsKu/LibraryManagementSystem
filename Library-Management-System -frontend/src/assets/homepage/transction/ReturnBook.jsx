import { useState } from "react";

const ReturnBook = () => {
  const [formData, setFormData] = useState({
    bookName: '',
    authorName: '',
    serialNo: '',
    issueDate: '',
    returnDate: '',
    remarks: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Book Returned Successfully!\n' + JSON.stringify(formData, null, 2));
    setFormData({
      bookName: '',
      authorName: '',
      serialNo: '',
      issueDate: '',
      returnDate: '',
      remarks: '',
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Return Book</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Book Information</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Transaction Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Enter Book Name:</label>
                <input
                  type="text"
                  name="bookName"
                  value={formData.bookName}
                  onChange={handleChange}
                  placeholder="Book Name"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Issue Date:</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Enter Author Name:</label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  placeholder="Author Name"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Return Date:</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Serial No:</label>
                <input
                  type="text"
                  name="serialNo"
                  value={formData.serialNo}
                  onChange={handleChange}
                  placeholder="Serial Number"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Remarks:</label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Additional Remarks"
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                  }}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Return Book
        </button>
      </form>
    </div>
  );
};

export default ReturnBook;