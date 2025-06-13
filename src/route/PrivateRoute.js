import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg mt-52 text-red-500 text-6xl"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;