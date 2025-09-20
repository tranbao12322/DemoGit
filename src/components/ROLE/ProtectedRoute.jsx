import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    // Nếu chưa đăng nhập thì chuyển về login
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(currentUser.role)) {
    // Nếu không có quyền truy cập
    return (
      <div>
        <h2>Bạn không có quyền truy cập trang này.</h2>
        <button onClick={() => window.location.href = '/'}>Quay về trang chủ</button>
      </div>
    );
  }

  return children;
};
