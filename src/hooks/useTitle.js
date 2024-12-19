import { useEffect } from 'react';

const useTitle = (titleText) => {
    useEffect(() => {
        document.title = `Apprent - ${titleText}` || 'Apprent';
    }, [titleText])
};

export default useTitle;