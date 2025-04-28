import { Suspense } from 'react';
import { Loader } from '../../Loader/loader';
import { RestaurantCardContainer } from '../../Restaurant-card/restaurant-card-container';
import { getRestaurantById } from '../../../services/get-restaurant-by-id';

export async function RestaurantPage({ children, restaurantId }) {
    const data = await getRestaurantById(restaurantId);

    if (!data) {
        return null;
    }

    return <RestaurantCardContainer data={data}>{children}</RestaurantCardContainer>;
}