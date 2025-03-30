import { useRef, useEffect, useState } from 'react';

export function ProgressBar() {
    const [progressWidth, setProgressWidth] = useState(1);

    useEffect(() => {
        const scrollHandler = () => {
            const viewporhHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - viewporhHeight;
            const scrolled = window.scrollY;

            const progress = (scrolled / documentHeight) * 100;

            setProgressWidth(progress);
        }

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${progressWidth}%`,
            height: '8px',
            background: 'tomato',
            borderRadius: '4px',
            zIndex: 1
        }} />
    )
}