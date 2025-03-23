import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { ProgressBar } from '../Progress-bar/progress-bar';

export function Layout({ children }) {
    return (
        <div>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </div>
    );
}
