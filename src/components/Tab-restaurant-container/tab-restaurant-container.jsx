import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Tab } from '../Tab/tab';

<<<<<<<< HEAD:src/components/Restaurants-tabs/restaurants-tabs-container.jsx
export function RestaurantsTabsContainer({ id }) {
    const tab = useSelector((state) => selectRestaurantById(state, id));
========
export function TabRestaurantContainer({ id, onClick, isActive }) {
    const restaurantTab = useSelector((state) => selectRestaurantById(state, id));
>>>>>>>> main:src/components/Tab-restaurant-container/tab-restaurant-container.jsx

    if (!restaurantTab) {
        return;
    }

    return (
        <Tab
<<<<<<<< HEAD:src/components/Restaurants-tabs/restaurants-tabs-container.jsx
            link={id}
            title={tab.name}
========
            title={restaurantTab.name}
            onClick={onClick}
            isActive={isActive}
>>>>>>>> main:src/components/Tab-restaurant-container/tab-restaurant-container.jsx
        />
    );
}