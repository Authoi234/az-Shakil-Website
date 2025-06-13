import { useEffect, useState } from "react"

const usePartner = role => {
    const [isPartner, setIsPartner] = useState(false);
    const [isPartnerLoading, setIsPartnerLoading] = useState(true);

    useEffect(() => {
       if(role){
        if(role === "partner"){
            setIsPartner(true)
            setIsPartnerLoading(false)
        }
        else{
            setIsPartner(false)
            setIsPartnerLoading(false)
        }
       }
    }, [role]);

    return [isPartner, isPartnerLoading];
};

export default usePartner;