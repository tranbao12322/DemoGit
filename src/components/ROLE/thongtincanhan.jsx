  import useUser from '../../hooks/useUser';
  import { useNavigate } from 'react-router';
  import React, { useState, useEffect } from 'react';
  import './canhan.css'

  const Canhan = () => {
    const { user, logoutUser, setLoginUser } = useUser();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false); // 👈 THÊM
    const [editedUser, setEditedUser] = useState(user || {}); // 👈 THÊM

    const handleLogout = () => {
      logoutUser();
      navigate('/login');
    };

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleSave = () => {
      setLoginUser(editedUser);
      setIsEditing(false);
    };

    const handleCancel = () => {
      setIsEditing(false);
      setEditedUser(user);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedUser({
        ...editedUser,
        [name]: value,
      });
    };

    return (
      <div className="profile-container">
        <h2>Thông tin cá nhân</h2>

        {isEditing ? (
          <div className="profile-info">
            <input type="text" name="username" value={editedUser.username} onChange={handleChange} placeholder="Tên người dùng" />
            <input type="email" name="email" value={editedUser.email || ''} onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" value={editedUser.phone || ''} onChange={handleChange} placeholder="Số điện thoại" />
            <input type="password" name="password" value={editedUser.password} onChange={handleChange} placeholder="Mật khẩu" />
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Tên người dùng:</strong> {user?.username}</p>
            <p><strong>Mật khẩu:</strong> {user?.password}</p>
            <p><strong>Email:</strong> {user?.email || '(chưa cập nhật)'}</p>
            <p><strong>Số điện thoại:</strong> {user?.phone || '(chưa cập nhật)'}</p>
          </div>
        )}

        <div className="button-group">
          {isEditing ? (
            <>
              <button onClick={handleSave}>Lưu</button>
              <button onClick={handleCancel}>Hủy</button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>Chỉnh sửa</button>
            </>
          )}
        </div>
      </div>
    );
  };


  export default Canhan;