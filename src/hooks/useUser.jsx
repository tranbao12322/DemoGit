// import { useState } from 'react';
// import { useEffect } from 'react';

// const useUser = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] =  useState({});
//   useEffect(() => {
//     // Kiểm tra trạng thái đăng nhập từ localStorage hoặc API
  
//     const localisAuthenticated = localStorage.getItem('isAuthenticated')
//     const user = localStorage.getItem('user')
//     if(localisAuthenticated!='undefined')
//       setIsAuthenticated(JSON.parse(localisAuthenticated))
//     if(user!='undefined')
//       setUser(JSON.parse(user))
//   }, []);
//   const setLoginUser = (inputUser)=>{
//     console.log(inputUser)
//     setUser(inputUser)
//     setIsAuthenticated(true)
//     localStorage.setItem('isAuthenticated',true)
//     localStorage.setItem('user',JSON.stringify(inputUser))
    
//   }
//   const logoutUser = () => {
//     setIsAuthenticated(false);
//     setUser({});
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('user');
//   };
//   return {isAuthenticated,user,setLoginUser, logoutUser};
// }

// export default useUser



import { useState, useEffect } from 'react';

const useUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const localIsAuthenticated = localStorage.getItem('isAuthenticated');
    const localUser = localStorage.getItem('user');

    if (localIsAuthenticated === 'true') {
      setIsAuthenticated(true);
    }

    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const setLoginUser = (inputUser) => {
    setUser(inputUser);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(inputUser));
  };

  const logoutUser = () => {
    setUser({});
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  return { isAuthenticated, user, setLoginUser, logoutUser };
};

export default useUser;

