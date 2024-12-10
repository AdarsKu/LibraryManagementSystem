

const Maintenance = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Maintenance Management</h2>

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
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Membership</td>
            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <button
                onClick={() => alert('Add Membership')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
              <button
                onClick={() => alert('Update Membership')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Books/Movies</td>
            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <button
                onClick={() => alert('Add Books/Movies')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
              <button
                onClick={() => alert('Update Books/Movies')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>User Management</td>
            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <button
                onClick={() => alert('Add User Management')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
              <button
                onClick={() => alert('Update User Management')}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Maintenance;
