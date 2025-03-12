import { useState } from 'react';

export function MenuItem({ item }) {
    const MIN_COUNT = 0;
    const MAX_COUNT = 5;
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
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </li>
    )
}