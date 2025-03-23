import React from 'react';
import { Layout } from '../Layout/layout';
import { RestaurantsPage } from '../Restaurants-page/restaurants-page';
import './app.module.scss';
import { ThemeContext } from '../Theme-context/theme-context';
import { UserContext } from '../User-context/user-context';

export function App() {
    return (
        <ThemeContext>
            <UserContext>
                <Layout>
                    <RestaurantsPage />
                </Layout>
            </UserContext>
        </ThemeContext>
    );
}
