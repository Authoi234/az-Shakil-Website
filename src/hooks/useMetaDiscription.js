import { useEffect } from 'react';

const useMetaDiscription = (discription) => {
    useEffect(() => {
        document.querySelector("meta[name='description']").content = discription || 'Empowering Minds, Shaping Futures';
    }, [discription])
};

export default useMetaDiscription;