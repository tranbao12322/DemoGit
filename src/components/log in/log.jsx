import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import useUser from '../../hooks/useUser';
import LoginForm from './loginForm';
import UserList from '../../hooks/userList'; // Danh sách người dùng mặc định

const Login = () => {
  const { isAuthenticated, setLoginUser } = useUser();
  const navigate = useNavigate();

  const [loginFormValue, setLoginFormValue] = useState({
    name: '',
    password: ''
  });

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Lấy danh sách user từ localStorage (nếu có)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Kết hợp user từ localStorage và UserList tĩnh
    const combinedUsers = [...storedUsers, ...UserList];

    // Tìm người dùng hợp lệ
    const matchedUser = combinedUsers.find(
      (user) =>
        user.username === loginFormValue.name &&
        user.password === loginFormValue.password
    );

    if (!matchedUser) {
      alert('Sai thông tin đăng nhập');
      return;
    }

    // Đăng nhập thành công
    setLoginUser(matchedUser);
    localStorage.setItem('currentUser', JSON.stringify(matchedUser));

    alert('Đăng nhập thành công!');
    navigate('/dashboard');
  };


  
  

  const handleSignupClick = () => navigate('/signin');
  const handleForgotClick = () => alert('Liên hệ quản trị viên để lấy lại mật khẩu.');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);



  return (
    <div className="login">
      <h2>{isAuthenticated ? 'Bạn đã đăng nhập' : 'Bạn chưa đăng nhập'}</h2>
      <h1>Đăng Nhập</h1>

      <LoginForm
        formValue={loginFormValue}
        onChange={setLoginFormValue}
        onSubmit={handleLoginSubmit}
        onSignupClick={handleSignupClick}
        onForgotClick={handleForgotClick}
      />
    </div>
  );
};

export default Login;



