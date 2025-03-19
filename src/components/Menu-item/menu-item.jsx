import { useCallback, useState } from 'react';
import { Counter } from '../Counter/counter';
import { MIN_COUNT, MAX_COUNT } from '../../constants/constants';

export function MenuItem({ item }) {
    const [counter, setCounter] = useState(MIN_COUNT);

    const increment = useCallback(() => {
        if (counter === MAX_COUNT) {
            return;
        }

        return setCounter((count) => count + 1);
    }, [counter]);

    const decrement = useCallback(() => {
        if (counter === MIN_COUNT) {
            return;
        }
        return setCounter((count) => count - 1);
    }, [counter]);

    return (
        <li>
            <h4>{item.name}</h4>
            <Counter increment={increment} decrement={decrement}>
                {counter}
            </Counter>
        </li>
    )
}