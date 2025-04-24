import { RestaurantCardContainer } from '../../Restaurant-card/restaurant-card-container';

export function RestaurantPage({ children, restaurantId }) {
    return (
        <RestaurantCardContainer id={restaurantId}>{children}</RestaurantCardContainer>
    )
}