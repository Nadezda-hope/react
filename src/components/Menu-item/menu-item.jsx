import { useState } from 'react';
import { Counter } from '../Counter/counter';
import { MIN_COUNT, MAX_COUNT } from '../../constants/constants';

export function MenuItem({ item }) {
    const [counter, setCounter] = useState(MIN_COUNT);

    const increment = () => {
        if (counter === MAX_COUNT) {
            return;
        }

        return setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter === MIN_COUNT) {
            return;
        }
        return setCounter(counter - 1);
    };

    return (
        <li>
            <h4>{item.name}</h4>
            <Counter increment={increment} decrement={decrement}>
                {counter}
            </Counter>
        </li>
    )
}