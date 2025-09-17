import Header from '../hearder/head';
import './style.css';
import useUser from '../../hooks/useUser';
import UserList from '../../hooks/userList';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const {
    isAuthenticated,
    setLoginUser
  } = useUser();
  const navigate = useNavigate()
  console.log(isAuthenticated);
  const [loginFromValue, setLoginFromValue] = useState({
    name: '',
    password: ''
  });
  const loginFormsubmit = (event) => {
    event.preventDefault();
    const userIndex = UserList.findIndex(v=>
      v.password==loginFromValue.password 
      &&v.username === loginFromValue.name)
    console.log(loginFromValue);
    const isValidInputs 
    = userIndex !== -1
      console.log(isValidInputs)
    if(!isValidInputs){
      alert('sai thong tin')
      return;
    }
    
    const matcheUser = UserList[userIndex]
    console.log(matcheUser)
    setLoginUser(matcheUser)

  }
  
    if(isAuthenticated){ 
      navigate('/ttcn') 
      console.log(navigate)

    }

  return (
    <div className="login">
      {
        isAuthenticated 
        ?<h2>Bạn đã đăng nhập</h2> 
        : <h2>Bạn chưa đăng nhập</h2>
      }


      <h1>Đăng Nhập</h1>
      <form onSubmit={loginFormsubmit}>
      <input type="text" placeholder="Tên đăng nhập" value={
        loginFromValue.name}
        onChange={(e)=>{
          setLoginFromValue({
            ...loginFromValue,
            'name': e.target.value
          })
        }}/>
      <input type="password" placeholder="Mật khẩu" value={
        loginFromValue.password}
        onChange={(e)=>{
          setLoginFromValue({
            ...loginFromValue,
            'password': e.target.value
          })
        }}
      
      />
      <button type='submit' className="login-btn">Đăng Nhập</button>
      <button className="signup-btn" onClick={() => window.location.href = '/signin'}>Đăng Ký</button>
      <button className="forgot-btn">Quên mật khẩu</button>
      </form>
      
    </div>
  );
}

export default Login;
