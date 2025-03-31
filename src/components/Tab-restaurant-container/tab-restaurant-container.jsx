import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Tab } from '../Tab/tab';

export function TabRestaurantContainer({ id, onClick, isActive }) {
    const restaurantTab = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurantTab) {
        return;
    }

    return (
        <Tab
            title={restaurantTab.name}
            onClick={onClick}
            isActive={isActive}
        />
    );
}