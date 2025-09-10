import React, { useState } from 'react';
import './style.css';

function Apple() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lấy danh sách người dùng đã lưu trong localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem tên đăng nhập đã tồn tại chưa
    const userExists = users.some(user => user.username === form.username);
    if (userExists) {
      alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.');
      return;
    }

    // Thêm người dùng mới vào danh sách
    users.push(form);

    // Lưu danh sách người dùng vào localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công!');

    // Reset form sau khi đăng ký thành công
    setForm({
      username: '',
      email: '',
      phone: '',
      password: ''
    });
  };

  return (
    <div className="sign">
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-btn">Đăng Ký</button>
      </form>
    </div>
  );
}

export default Apple;
