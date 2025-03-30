import { useSelector } from 'react-redux';
import { RestaurantCard } from './restaurant-card';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';

export function RestaurantCardContainer({ id }) {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return;
    }

    const { name, menu, reviews } = restaurant;

    return (
        <RestaurantCard
            name={name}
            menuIds={menu}
            reviewsIds={reviews}
        />
    );
}