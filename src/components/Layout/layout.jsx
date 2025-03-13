import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { RestaurantsPage } from '../Restaurants-page/restaurants-page';

export function Layout({ restaurants }) {
    return (
        <div>
            <Header />
            <RestaurantsPage />
            <Footer />
        </div>
    );
}
