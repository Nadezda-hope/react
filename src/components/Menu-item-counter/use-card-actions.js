import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectCountByDishId } from '../../redux/entities/basket/slice';

export function useCardActions(id) {
    const dispatsh = useDispatch();
    const count = useSelector((state) => selectCountByDishId(state, id)) || 0;

    const increment = useCallback(() => dispatsh(addToBasket(id)),
        [dispatsh, id]
    );

    const decrement = useCallback(() => dispatsh(removeFromBasket(id)),
        [dispatsh, id]
    );

    return { increment, decrement, count };
}