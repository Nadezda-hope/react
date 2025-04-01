import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Tab } from '../Tab/tab';

export function RestaurantsTabsContainer({ id }) {
    const restaurantTab = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurantTab) {
        return;
    }

    return (
        <Tab
            link={id}
            title={restaurantTab.name}
        />
    );
}