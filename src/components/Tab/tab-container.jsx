import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Tab } from './tab';

export function TabContainer({ id, onClick, isActive }) {
    const tab = useSelector((state) => selectRestaurantById(state, id));

    if (!tab) {
        return;
    }

    return (
        <Tab
            title={tab.name}
            onClick={onClick}
            isActive={isActive}
        />
    );
}