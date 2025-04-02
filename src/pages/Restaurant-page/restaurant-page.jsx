import { useParams } from 'react-router';
import { RestaurantCardContainer } from '../../components/Restaurant-card/restaurant-card-container';

export function RestaurantPage() {
    const { restaurantId } = useParams();

    return (
        <RestaurantCardContainer id={restaurantId} />
    )
}