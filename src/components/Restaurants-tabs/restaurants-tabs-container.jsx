import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Tab } from '../Tab/tab';

export function RestaurantsTabsContainer({ id }) {
    const tab = useSelector((state) => selectRestaurantById(state, id));

    if (!tab) {
        return;
    }

    return (
        <Tab
            link={id}
            title={tab.name}
        />
    );
}