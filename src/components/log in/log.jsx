import Header from '../hearder/head';
import './style.css';

function Login() {
  return (
    <div className="login">
      <h1>Đăng Nhập</h1>
      <input type="text" placeholder="Tên đăng nhập" />
      <input type="password" placeholder="Mật khẩu" />
      <button className="login-btn">Đăng Nhập</button>
      <button className="forgot-btn">Quên mật khẩu</button>
      
    </div>
  );
}

export default Login;
