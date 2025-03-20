import { useCallback, useState } from 'react';
import { Counter } from '../Counter/counter';
import { MIN_COUNT, MAX_COUNT } from '../../constants/constants';

export function MenuItem({ item }) {
    const [counter, setCounter] = useState(MIN_COUNT);

    const increment = useCallback(() => {
        return setCounter((count) => {
            if (count === MAX_COUNT) {
                return count;
            }

            return count + 1;
        });
    }, []);

    const decrement = useCallback(() => {
        return setCounter((count) => {
            if (count === MIN_COUNT) {
                return count;
            }

            return count - 1;
        });
    }, []);

    return (
        <li>
            <h4>{item.name}</h4>
            <Counter increment={increment} decrement={decrement}>
                {counter}
            </Counter>
        </li>
    )
}