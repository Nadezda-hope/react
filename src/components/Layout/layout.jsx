import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

export function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
