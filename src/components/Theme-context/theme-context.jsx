'use client';

import { useState } from 'react';
import { ThemeContext as ThemeContextProvider } from ".";

export function ThemeContext({ children }) {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <ThemeContextProvider value={{ theme, switchTheme }}>
            {children}
        </ThemeContextProvider>
    );
}