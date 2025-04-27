'use client';

import { useEffect, useState } from 'react';
import styles from './progress-bar.module.scss';

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
        <div className={styles.progressBar} style={{ width: `${progressWidth}%` }} />
    )
}