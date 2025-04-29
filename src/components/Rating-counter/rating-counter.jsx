import { Button } from '../Button/button';
import styles from './rating-counter.module.scss';

export function RatingCounter({ ref, defaultValue }) {
    return (
        <div className={styles.counter}>
            <input
                className={styles.counter__input}
                id='rating'
                name='rating'
                min={1}
                max={5}
                type='number'
                ref={ref}
                defaultValue={defaultValue}
            />
            <Button onClickHandler={() => ref.current.stepDown()}>
                -
            </Button>
            <Button onClickHandler={() => ref.current.stepUp()}>
                +
            </Button>
        </div>
    );
}