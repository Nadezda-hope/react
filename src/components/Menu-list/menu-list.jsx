import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import { getDishes } from '../../redux/entities/dishes/get-dishes';
import { selectDishesIds } from '../../redux/entities/dishes/slice';
import { useRequest } from '../../redux/hooks/use-request';
import { MenuItem } from '../Menu-item/menu-item';
import styles from './menu-list.module.scss';
import { Loader } from '../Loader/loader';

export function MenuList() {
    const { restaurantId } = useOutletContext();
    const requestStatus = useRequest(getDishes, restaurantId);
    const menu = useSelector(selectDishesIds);

    if (requestStatus === 'idle' || requestStatus === 'pending') {
        return (
            <Loader />
        )
    }

    if (requestStatus === 'rejected') {
        return (
            <div>Something went wrong</div>
        );
    }

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