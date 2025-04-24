'use client';

import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api-service';
import { MenuItem } from '../Menu-item/menu-item';
import { State } from '../State/state';
import styles from './menu-list.module.scss';

export function MenuList({ restaurantId }) {
    const { data: menu, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isLoading || isError) {
        return <State isLoading={isLoading} isError={isError} />
    }

    if (!menu) {
        return null;
    }

    return (
        <div className={styles.menuList}>
            {
                menu.map(({ id, name }) => (
                    <MenuItem key={id} id={id} name={name} />
                ))
            }
        </div>
    )
}