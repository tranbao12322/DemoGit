    import { Navigate } from 'react-router-dom';
    import useUser  from '../hooks/useUser';

    const RoleBasedRoute = ({ children, allowedRoles }) => {
    const { currentUser } = useUser();

    // if (!currentUser) {
    //     return <Navigate to="/login" />;
    // }

    // if (!allowedRoles.includes(currentUser.role)) {
    //     return <Navigate to="/unauthorized" />;
    // }

    return children;
    };

    export default RoleBasedRoute;
