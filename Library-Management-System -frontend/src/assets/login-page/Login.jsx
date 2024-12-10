import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const username = useRef('')
  const password = useRef('')

  const navigate = useNavigate();

  const handleAddNewUser = () => {
    navigate('/add-user'); // Navigate to the Add New User page
  };


  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(`Logging in as ${loginType}:`, data);

    console.log(username.current, "  ", password.current)
    if (username.current && password.current) {
      if (loginType === 'admin')
        navigate('/admin-home');
      else
        navigate('/user-home');

    }
  };


  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2>{loginType === 'user' ? 'User Login' : 'Admin Login'}</h2>
      <div>
        <button onClick={() => handleLoginTypeChange('user')} style={{ marginRight: '10px' }}>
          User Login
        </button>
        <button onClick={() => handleLoginTypeChange('admin')}>
          Admin Login
        </button>
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            ref={username}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={password}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Login
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAddNewUser} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Add New User
        </button>
      </div>
    </div>
  );
};

export default Login;
