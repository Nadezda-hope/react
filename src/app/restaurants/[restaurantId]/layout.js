import { RestaurantPage } from '../../../components/pages/Restaurant-page/restaurant-page';

export default async function RestaurantLayout({ children, params }) {
    const { restaurantId } = await params;
    return (
        <RestaurantPage restaurantId={restaurantId}>
            {children}
        </RestaurantPage>
    );
}