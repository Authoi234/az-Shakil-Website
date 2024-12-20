import { useEffect, useState } from 'react';

const useNumReacher = (startFrom, destination, speed, stepSize) => {
    const [number, setNumber] = useState(startFrom);

    useEffect(() => {
        if (number < destination) {
            const interval = setInterval(() => {
                setNumber((prev) => Math.min(prev + stepSize, destination));
            }, speed); // Adjust interval as needed
            return () => clearInterval(interval);
        }
    }, [number, destination, speed, stepSize]);

    return number;
};

export default useNumReacher;