import { useSelector } from 'react-redux';
import { selectCountByDishId } from '../../redux/entities/basket/slice';
import { Counter } from '../Counter/counter';
import { use } from 'react';
import { useMenuItemDispatch } from './use-menu-item-dispatch';
import { UserContext } from '../User-context';

export function MenuItemCounter({ id }) {
    const count = useSelector((state) => selectCountByDishId(state, id)) || 0;
    const { increment, decrement } = useMenuItemDispatch(id);
    const { user } = use(UserContext);

    return (
        user &&
        <Counter increment={increment} decrement={decrement}>
            {count}
        </Counter>
    )
}