import React, { useEffect, useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import useUser from '@/hooks/useUser';
import EditProduct from './EditProduct';
import AdminProductManager from './AdminProductManager';
import './Dashboard.css'; // (nếu bạn có style riêng)
import Canhan from './thongtincanhan';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logoutUser, isAuthenticated, loading } = useUser();
  const [showAdminProductManager, setShowAdminProductManager] = useState(false);
  const [showttcn,setshowttcn] = useState(false);

  // Điều hướng về login nếu chưa đăng nhập
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Đăng xuất
  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  // Đang loading
  if (loading) {
    return <p>🔄 Đang tải thông tin người dùng...</p>;
  }

  // Trường hợp user null (dù đã check isAuthenticated)
  if (!user) {
    return <p>⚠️ Không thể tải thông tin người dùng.</p>;
  }

  return (
    <div className="dashboard-container">
      <p>👋 Chào mừng, <strong>{user.username}</strong></p>
      <p>🔑 Vai trò: <strong>{user.role}</strong></p>

      {/* ADMIN ZONE */}
      {user.role === 'admin' && (
        <div className="admin-section">
          <h3>⚙️ Quản trị viên - Chức năng quản lý</h3>
          <div className="admin-buttons">
            {/* <button onClick={() => navigate('/admin/users')}>👥 Quản lý người dùng</button>
            <button onClick={() => navigate('/admin/system')}>🛠️ Quản lý hệ thống</button> */}
            <button onClick={() => setShowAdminProductManager(true)}>✏️ Chỉnh sửa sản phẩm</button>
          </div>

          
          {showAdminProductManager && (
            <div className="edit-product-wrapper">
              <h4>📝 Trình chỉnh sửa sản phẩm</h4>
              <AdminProductManager />
            </div>
          )}
        </div>
      )}

      {/* USER ZONE */}
      {user.role === 'user' && (
        <div className="user-section">
          <h3>👤 Người dùng thường</h3>
          <p>Bạn có thể xem và cập nhật thông tin cá nhân tại đây.</p>
          <button onClick={()=>setshowttcn(true)}>thông tin cá nhân</button>
          {showttcn && (
            <div className="edit-product-wrapper">
              <Canhan />
            </div>
          )}
          {/* Có thể thêm form cập nhật thông tin tại đây */}
        </div>
      )}

      <button className="logout-button" onClick={handleLogout}>🚪 Đăng xuất</button>
      
    </div>
  );
};

export default Dashboard;
