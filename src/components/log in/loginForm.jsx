

const LoginForm = ({ formValue, onChange, onSubmit, onSignupClick, onForgotClick }) => {
  return (
    <form onSubmit={onSubmit} className="login-form">
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={formValue.name}
        onChange={(e) => onChange({ ...formValue, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={formValue.password}
        onChange={(e) => onChange({ ...formValue, password: e.target.value })}
      />
      <button type="submit" className="login-btn">Đăng Nhập</button>
      <button type="button" className="signup-btn" onClick={onSignupClick}>Đăng Ký</button>
      <button type="button" className="forgot-btn" onClick={onForgotClick}>Quên mật khẩu</button>
    </form>
  );
};

export default LoginForm;
