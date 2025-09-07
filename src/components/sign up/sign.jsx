import './style.css';

function Apple() {
  return (
    <div className="sign">
      <h1>Đăng Ký</h1>
       <input type="text" placeholder="Tên đăng nhập" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Số điện thoại" />
      <input type="password" placeholder="Mật khẩu" />
      <button className="signup-btn">Đăng Ký</button>
    </div>
  );
}

export default Apple;