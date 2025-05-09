'use client';

import { editReviewAction } from '@/actions/edit-review-action';
import { use, useCallback, useOptimistic, useState } from 'react';
import { Button } from '../Button/button';
import { ReviewForm } from '../Review-form/review-form';
import { UserContext } from '../User-context';
import styles from './review-list-item.module.scss';

export function ReviewListItem({ review, user, restaurantId }) {
    const [isEdit, changeEditState] = useState(false);
    const { user: currentUser } = use(UserContext);
    const isCurrentUserReview = review.userId === currentUser.id;

    const [optimisticReview, addOptimisicReview] = useOptimistic(
        review,
        (currentState, opmisticValue) => [
            ...currentState,
            { ...opmisticValue, id: 'creating' },
        ]
    );

    const handleAddReview = useCallback(
        async (state, formData) => {
            if (formData === null) {
                return {
                    text: '',
                    rating: 5
                };
            }

            const text = formData.get('text');
            const rating = formData.get('rating');

            const review = { text, rating };

            addOptimisicReview(review);

            await editReviewAction({ restaurantId, review });

            return {
                text: '',
                rating: 5
            };
        },
        [addOptimisicReview, restaurantId]
    );

    if (!optimisticReview) {
        return null;
    }

    const onChangeEditState = () => {
        changeEditState(!isEdit);
    }

    const { text } = review;

    return (
        <li className={styles.reviewItem}>
            <div className={styles.reviewItem__review}>
                <div className={styles.reviewItem__content}>
                    <div className={styles.reviewItem__list}>
                        {
                            [1, 2, 3, 4, 5].map(element => (
                                <div key={element}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill={element <= review.rating ? "#f0ad4e" : "#e5e5e5"} xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8 12.8395L3.04225 16L4.35681 10.0741L0 6.08395L5.74648 5.57037L8 0L10.2535 5.57037L16 6.08395L11.6432 10.0741L12.9577 16L8 12.8395Z"></path>
                                    </svg>
                                </div>
                            ))
                        }
                    </div>
                    <div>"<i>{text}</i>", - {user ? user.name : currentUser.name}</div>
                </div>
                {
                    isCurrentUserReview && <Button onClickHandler={onChangeEditState}>Edit</Button>
                }
            </div>
            {
                isCurrentUserReview && isEdit && review &&
                <div className={styles.reviewItem__form}>
                    <ReviewForm submitFormAction={handleAddReview} />
                </div>
            }
        </li>
    );
}
