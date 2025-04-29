'use client';

import { use } from 'react';
import { Counter } from '../Counter/counter';
import { UserContext } from '../User-context';
import { useCardActions } from './use-card-actions';

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