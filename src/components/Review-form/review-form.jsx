import { useActionState, useRef } from 'react';
import { INITIAL_FORM_VALUES } from '../../constants/constants';
import { Button } from '../Button/button';
import { RatingCounter } from '../Rating-counter/rating-counter';
import styles from './review-form.module.scss';

export function ReviewForm({ submitFormAction }) {
    const ratingRef = useRef();
    const [formState, submitAction, isPending] = useActionState(submitFormAction, { text: '', rating: 5 })

    return (
        <form className={styles.reviewForm} action={submitAction}>
            <div className={styles.reviewForm__container}>
                <label className={styles.reviewForm__control}> Name
                    <input className={styles.reviewForm__input} type="name" name='name' id='name' defaultValue={formState.name} />
                </label>
                <label className={styles.reviewForm__control}> Leave your review
                    <textarea className={styles.reviewForm__input} type="text" name='text' id='text' defaultValue={formState.text}></textarea>
                </label>
            </div>
            <div className={styles.reviewForm__actions}>
                <RatingCounter ref={ratingRef} defaultValue={formState.rating} />
                <Button formAction={() => submitAction(null)}>
                    Clear
                </Button>
                <Button type='submit' isDisabled={isPending}>
                    Submit
                </Button>
            </div>
        </form>
    )
}