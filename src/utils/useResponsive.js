import { useState, useEffect } from 'react';

export const useResponsive = () => {
    const [res, setRes] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setRes(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setRes(window.innerWidth));
        };
    }, []);
    return {
        isDesktop: res >= 1501,
        isTablet: res >= 600 && res < 1501,
        isPhone: res < 600
    };
};
