import { AppProvider } from '../App-Provider/app-provider';
import { Basket } from '../Basket/basket';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { ProgressBar } from '../Progress-bar/progress-bar';
import { ThemeContext } from '../Theme-context/theme-context';
import { UserContext } from '../User-context/user-context';
import styles from './layout.module.scss';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <AppProvider>
                <ThemeContext>
                    <UserContext>
                        <ProgressBar />
                        <Header />
                        {children}
                        <Basket />
                        <Footer />
                    </UserContext>
                </ThemeContext>
            </AppProvider>
        </div>
    );
}
