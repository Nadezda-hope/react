'use client';

import { use } from 'react';
import { ThemeContext } from '../Theme-context';
import { Button } from '../Button/button';
import styles from './switch-theme.module.scss';


export function SwitchTheme() {
    const { theme, switchTheme } = use(ThemeContext);

    return (
        <Button onClickHandler={switchTheme}>
            <img className={styles.switchTheme__img} src='/dark-theme.svg' />
            {theme === 'light' ? 'Light theme' : 'Dark theme'}
        </Button>
    )
}