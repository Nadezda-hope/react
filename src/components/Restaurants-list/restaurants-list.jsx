import { getRestaurants } from '../../services/get-restaurants';
import { RestaurantsTabs } from '../Restaurants-tabs/restaurants-tabs';

export async function RestaurantsList() {
    const data = await getRestaurants();

    if (!data) {
        return null;
    }

    return <RestaurantsTabs data={data}></RestaurantsTabs>;
}