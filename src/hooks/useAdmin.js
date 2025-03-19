import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
       if(email){
        if(email === "visa@apprent.azshakil.com"){
            setIsAdmin(true)
            setIsAdminLoading(false)
        }
        else{
            setIsAdmin(false)
            setIsAdminLoading(false)
        }
       }
    }, [email]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;