import { useState, useEffect } from 'react';

const useUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // để dễ kiểm tra null
  const [loading, setLoading] = useState(true); // trạng thái đang tải

  useEffect(() => {
    const localIsAuthenticated = localStorage.getItem('isAuthenticated');
    const localUser = localStorage.getItem('user');

    if (localIsAuthenticated === 'true' && localUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(localUser));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }

    setLoading(false); // Đã đọc xong localStorage
  }, []);

  const setLoginUser = (inputUser) => {
    setUser(inputUser);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(inputUser));
  };

  const logoutUser = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  return { isAuthenticated, user, loading, setLoginUser, logoutUser };
};

export default useUser;
