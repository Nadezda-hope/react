import { useOutletContext } from 'react-router';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api-service';
import { MenuItem } from '../Menu-item/menu-item';
import { State } from '../State/state';
import styles from './menu-list.module.scss';

export function MenuList() {
    const { restaurantId } = useOutletContext();
    const { data: menu, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

    return (
        <State isLoading={isLoading} isError={isError}>
            <div className={styles.menuList}>
                {
                    menu && menu.map(({ id, name }) => (
                        <MenuItem key={id} id={id} name={name} />
                    ))
                }
            </div>
        </State>
    )
}