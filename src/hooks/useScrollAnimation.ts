import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement>() => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const scrollHandler = () => {
            if (!ref.current) return;
            const elementTop = ref.current.getBoundingClientRect().top;
            const elementInView = elementTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;

            if (elementInView) {
                setIsVisible(true);
            }
        };

        scrollHandler();

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return { ref, isVisible };
};