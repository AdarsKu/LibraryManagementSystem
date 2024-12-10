
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Maintenance from './maintainance';
import Report from './Report';
import Transaction from './Transaction'
import ProductDetails from './ProductDetails';


const AdminHomePage = () => {
  const [flag, setFlagMR] = useState(0)
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: '#343a40',
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Library Admin</h1>
        <div>
          <button
            onClick={() => { setFlagMR(1) }}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              margin: '0 10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Maintenance
          </button>
          <button
            onClick={() => { setFlagMR(2) }}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              margin: '0 10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reports
          </button>
          <button
            onClick={() => { setFlagMR(3) }}
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
            onClick={() => { setFlagMR(0) }}
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
        {flag == 1 && <Maintenance />}
        {flag == 2 && <Report />}
        {flag == 3 && <Transaction />}
        {flag == 0 && < ProductDetails />}
      </div>
    </div>
  );
};



export default AdminHomePage;

