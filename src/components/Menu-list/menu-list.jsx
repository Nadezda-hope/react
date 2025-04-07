import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import { getDishes } from '../../redux/entities/dishes/get-dishes';
import { selectDishesIds } from '../../redux/entities/dishes/slice';
import { useRequest } from '../../redux/hooks/use-request';
import { MenuItem } from '../Menu-item/menu-item';
import { State } from '../State/state';
import styles from './menu-list.module.scss';

export function MenuList() {
    const { restaurantId } = useOutletContext();
    const requestStatus = useRequest(getDishes, restaurantId);
    const menu = useSelector(selectDishesIds);

    return (
        <State state={requestStatus}>
            <div className={styles.menuList}>
                {
                    menu.map((id) => (
                        <MenuItem key={id} id={id} />
                    ))
                }
            </div>
        </State>
    )
}