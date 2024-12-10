
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../admin/ProductDetails';
import Report from '../admin/Report';
import Transaction from '../admin/Transaction';


const UserHomePage = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(0)

  const handleLogout = () => {
    // Add logout logic here
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: '#007bff',
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Library User</h1>
        <div>
          <button
            onClick={() => { setFlag(0) }}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              margin: '0 10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Product Details
          </button>
          <button
            onClick={() => { setFlag(2) }}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              margin: '0 10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Report
          </button>
          <button
            onClick={() => setFlag(3)}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              margin: '0 10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Transactions
          </button>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div style={{ padding: '20px' }}>
        {flag == 0 && <ProductDetails />}
        {flag == 2 && <Report />}
        {flag == 3 && <Transaction />}
      </div>
    </div>
  );
};

export default UserHomePage;
