'use client';

import styles from './header.module.scss';
import { SwitchTheme } from '../SwitchTheme/switch-theme';
import { SignIn } from '../Sign-in/sign-in';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__actions}>
                <SwitchTheme />
                <SignIn />
            </div>
            <div className={styles.header__imgContainer}>
                <img className={styles.header__img} src='/header-img.jpg' alt='food' />
                <h3 className={styles.header__title}>Order Food</h3>
                <h4 className={styles.header__text}>From 175 Restaurants</h4>
            </div>
        </header>
    );
}
