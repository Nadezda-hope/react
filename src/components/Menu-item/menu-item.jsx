import { use, useCallback, useState } from 'react';
import { Counter } from '../Counter/counter';
import { MIN_COUNT, MAX_COUNT } from '../../constants/constants';
import styles from './menu-item.module.scss';
import { UserContext } from '../User-context';

export function MenuItem({ item }) {
    const [counter, setCounter] = useState(MIN_COUNT);
    const { user } = use(UserContext);

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
        <li className={styles.menuItem}>
            <h4 className={styles.menuItem__name}>{item.name}</h4>
            {
                user && (
                    <Counter className={styles.menuItem__counter} increment={increment} decrement={decrement}>
                        {counter}
                    </Counter>
                )
            }
        </li>
    )
}