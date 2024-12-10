import './App.css'
import Login from './assets/login-page/Login'
import AddNewUser from './assets/login-page/AddNewUser';
import AdminHomePage from './assets/homepage/admin/AdminHomePage';
import UserHomePage from './assets/homepage/user/UserHomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-user" element={<AddNewUser />} />
          <Route path="/user-home" element={<UserHomePage />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
