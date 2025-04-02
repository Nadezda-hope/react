import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { ProgressBar } from '../Progress-bar/progress-bar';
import { Basket } from '../Basket/basket';
import { Outlet } from 'react-router';
import styles from './layout.module.scss';

export function Layout() {
    return (
        <div className={styles.layout}>
            <ProgressBar />
            <Header />
            <Outlet />
            <Basket />
            <Footer />
        </div>
    );
}
