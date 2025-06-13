import React, { useContext } from 'react';
import usePartner from '../hooks/usePartner';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PartnerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isPartner, isPartnerLoading] = usePartner(user?.role);

    if (loading || isPartnerLoading) {
        return <>
            <div>
                Loading.....
            </div>
        </>;
    }

    if (user && isPartner) {
        return children;
    }

    else { return <Navigate to={'/auth/login'} /> };
};

export default PartnerRoute;