// import Header from '../hearder/head';
// import './style.css';
// import useUser from '../../hooks/useUser';
// import UserList from '../../hooks/userList';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';

// function Login() {
//   const {
//     isAuthenticated,
//     setLoginUser
//   } = useUser();
//   const navigate = useNavigate()
//   console.log(isAuthenticated);
//   const [loginFromValue, setLoginFromValue] = useState({
//     name: '',
//     password: ''
//   });
//   const loginFormsubmit = (event) => {
//     event.preventDefault();
//     const userIndex = UserList.findIndex(v=>
//       v.password==loginFromValue.password 
//       &&v.username === loginFromValue.name)
//     console.log(loginFromValue);
//     const isValidInputs 
//     = userIndex !== -1
//       console.log(isValidInputs)
//     if(!isValidInputs){
//       alert('sai thong tin')
//       return;
//     }
    
//     const matcheUser = UserList[userIndex]
//     console.log(matcheUser)
//     setLoginUser(matcheUser)

//   }
  
//     if(isAuthenticated){ 
//       navigate('/ttcn') 
//       console.log(navigate)

//     }

//   return (
//     <div className="login">
//       {
//         isAuthenticated 
//         ?<h2>Bạn đã đăng nhập</h2> 
//         : <h2>Bạn chưa đăng nhập</h2>
//       }


//       <h1>Đăng Nhập</h1>
//       <form onSubmit={loginFormsubmit}>
//       <input type="text" placeholder="Tên đăng nhập" value={
//         loginFromValue.name}
//         onChange={(e)=>{
//           setLoginFromValue({
//             ...loginFromValue,
//             'name': e.target.value
//           })
//         }}/>
//       <input type="password" placeholder="Mật khẩu" value={
//         loginFromValue.password}
//         onChange={(e)=>{
//           setLoginFromValue({
//             ...loginFromValue,
//             'password': e.target.value
//           })
//         }}
      
//       />
//       <button type='submit' className="login-btn">Đăng Nhập</button>
//       <button className="signup-btn" onClick={() => window.location.href = '/signin'}>Đăng Ký</button>
//       <button className="forgot-btn">Quên mật khẩu</button>
//       </form>
      
//     </div>
//   );
// }

// export default Login;



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
    navigate('/ttcn');
  };
  

  const handleSignupClick = () => navigate('/signin');
  const handleForgotClick = () => alert('Liên hệ quản trị viên để lấy lại mật khẩu.');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/ttcn');
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



