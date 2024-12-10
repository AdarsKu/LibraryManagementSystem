

const Report = () => {
  const categories = [
    { title: 'Master List of Books', action: () => alert('Viewing Master List of Books') },
    { title: 'Master List of Movies', action: () => alert('Viewing Master List of Movies') },
    { title: 'Master List of Memberships', action: () => alert('Viewing Master List of Memberships') },
    { title: 'Active Issues', action: () => alert('Viewing Active Issues') },
    { title: 'Overdue Returns', action: () => alert('Viewing Overdue Returns') },
    { title: 'Pending Issue Requests', action: () => alert('Viewing Pending Issue Requests') },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reports</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Category</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{category.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                <button
                  onClick={category.action}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
