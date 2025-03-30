import { useParams } from 'react-router';
import { MenuItem } from '../Menu-item/menu-item';
import styles from './menu-list.module.scss';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { useSelector } from 'react-redux';

export function MenuList() {
    const { restaurantId } = useParams();
    const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!menu) {
        return;
    };

    return (
        <div className={styles.menuList}>
            {
                menu.map((id) => (
                    <MenuItem key={id} id={id} />
                ))
            }
        </div>
    )
}