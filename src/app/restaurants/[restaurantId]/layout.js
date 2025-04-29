import { RestaurantCardContainer } from '../../../components/Restaurant-card/restaurant-card-container';

export default async function RestaurantLayout({ children, params }) {
    const { restaurantId } = await params;

    return <RestaurantCardContainer id={restaurantId}>{children}</RestaurantCardContainer>;
}