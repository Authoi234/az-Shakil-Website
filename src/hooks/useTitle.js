import { useEffect } from 'react';

const useTitle = (titleText) => {
    useEffect(() => {
        if (titleText) {
             document.title = `Apprent - ${titleText}`
        }
        else{
            document.title = "Apprent - Empowering minds, shaping futures"
        }
    }, [titleText])
};

export default useTitle;