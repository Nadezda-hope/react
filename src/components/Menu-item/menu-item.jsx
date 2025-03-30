import { use, useCallback, useState } from 'react';
import { Counter } from '../Counter/counter';
import { MIN_COUNT, MAX_COUNT } from '../../constants/constants';
import styles from './menu-item.module.scss';
import { UserContext } from '../User-context';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { addToBasket, removeFromBasket, selectCountByDishId } from '../../redux/entities/basket/slice';

export function MenuItem({ id }) {
    const count = useSelector((state) => selectCountByDishId(state, id)) || 0;
    const dispatsh = useDispatch();
    const dish = useSelector((state) => selectDishById(state, id))

    const { user } = use(UserContext);
    const { name, ingredients, price } = dish;

    const increment = useCallback(
        () => dispatsh(addToBasket(id)),
        [dispatsh, id]
    );

    const decrement = useCallback(
        () => dispatsh(removeFromBasket(id)),
        [dispatsh, id]
    );

    if (!dish) {
        return;
    }

    return (
        <li className={styles.menuItem}>
            <h4 className={styles.menuItem__name}>{name}</h4>
            {
                ingredients.map((ingredient) => ingredient).join(' ')
            }
            {
                <div className={styles.menuItem__price}>{price} $</div>
            }
            {
                user && (
                    <Counter className={styles.menuItem__counter} increment={increment} decrement={decrement}>
                        {count}
                    </Counter>
                )
            }
        </li>
    )
}