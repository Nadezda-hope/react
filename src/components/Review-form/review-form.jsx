import { Counter } from '../Counter/counter';
import { useReviewFormReducer } from './use-review-form-reducer';
import styles from './review-form.module.scss';
import { Button } from '../Button/button';

export function ReviewForm() {
    const { form, onNameChange, onTextChange, onIncreaseGrade, onDecreaseGrade, onClickHandler } = useReviewFormReducer();

    return (
        <form className={styles.reviewForm}>
            <div className={styles.reviewForm__container}>
                <label className={styles.reviewForm__control}> Name
                    <input className={styles.reviewForm__input} type="text" value={form.name} onChange={(event) => onNameChange(event.target.value)} />
                </label>
                <label className={styles.reviewForm__control}> Leave your review
                    <textarea className={styles.reviewForm__input} type="text" value={form.text} onChange={(event) => onTextChange(event.target.value)}></textarea>
                </label>
            </div>
            <div className={styles.reviewForm__actions}>
                <Counter increment={onIncreaseGrade} decrement={onDecreaseGrade}>
                    {form.grade}
                </Counter>
                <Button type='reset' onClickHandler={onClickHandler}>
                    Clear
                </Button>
            </div>
        </form>
    )
}