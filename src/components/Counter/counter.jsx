import { Button } from '../Button/button';
import styles from './counter.module.scss';

export function Counter({ children, decrement, increment }) {
    return (
        <div className={styles.counter}>
            <span className={styles.counter__content}>{children}</span>
            <Button onClickHandler={decrement}>
                -
            </Button>
            <Button onClickHandler={increment}>
                +
            </Button>
        </div>
    );
}