import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/entities/basket/slice';

export function useMenuItemDispatch(id) {
    const dispatsh = useDispatch();

    const increment = useCallback(() => dispatsh(addToBasket(id)),
        [dispatsh, id]
    );

    const decrement = useCallback(() => dispatsh(removeFromBasket(id)),
        [dispatsh, id]
    );

    return { increment, decrement };
}