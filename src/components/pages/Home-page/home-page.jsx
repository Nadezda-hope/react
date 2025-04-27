'use client';

import Link from 'next/link';
import styles from './home-page.module.scss';

export function HomePage() {
    return (
        <div className={styles.homePage}>
            <Link href={'/restaurants'}>To restaurants list</Link>
        </div>
    )
}