import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <>
            <div>
                Loading.....
            </div>
        </>;
    }

    if (user && isAdmin) {
        return children;
    }

    else{return <Navigate to={'/admin/auth/login'} />};
};

export default AdminRoute;