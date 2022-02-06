import { useState, useEffect } from 'react';

export const useResponsive = () => {
    const [res, setRes] = useState(window.innerWidth);

    const changeRes = () => setRes(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', changeRes());
        return () => {
            window.removeEventListener('resize', () => changeRes());
        };
    }, []);

    return {
        isDesktop: res >= 1501,
        isTablet: res >= 600 && res < 1501,
        isPhone: res < 600
    };
};
