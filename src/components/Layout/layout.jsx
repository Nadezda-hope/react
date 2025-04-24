'use client';

import { Provider } from 'react-redux';
import { Basket } from '../Basket/basket';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { ProgressBar } from '../Progress-bar/progress-bar';
import { ThemeContext } from '../Theme-context/theme-context';
import { UserContext } from '../User-context/user-context';
import styles from './layout.module.scss';
import { store } from '../../redux/store';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Provider store={store}>
                <ThemeContext>
                    <UserContext>
                        <ProgressBar />
                        <Header />
                        {children}
                        <Basket />
                        <Footer />
                    </UserContext>
                </ThemeContext>
            </Provider>;

        </div>
    );
}
