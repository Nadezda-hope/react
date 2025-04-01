import { useSelector } from 'react-redux';
import { selectCountByDishId } from '../../redux/entities/basket/slice';
import { Counter } from '../Counter/counter';
import { use } from 'react';
import { useCardActions } from './use-card-actions';
import { UserContext } from '../User-context';

export function MenuItemCounter({ id }) {
    const { increment, decrement, count } = useCardActions(id);
    const { user } = use(UserContext);

    if (!user) {
        return null;
    }

    return (
        <Counter increment={increment} decrement={decrement}>
            {count}
        </Counter>
    )
}