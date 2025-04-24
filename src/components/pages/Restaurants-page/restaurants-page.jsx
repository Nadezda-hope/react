import { RestaurantsList } from '../../Restaurants-list/restaurants-list';

export function RestaurantsPage({ children }) {
    return (
        <RestaurantsList>{children}</RestaurantsList>
    )
}