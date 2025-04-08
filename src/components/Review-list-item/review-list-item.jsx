import { use, useState } from 'react';
import { useEditReviewMutation, useGetUsersQuery } from '../../redux/services/api-service';
import { UserContext } from '../User-context';
import styles from './review-list-item.module.scss';
import { Button } from '../Button/button';
import { ReviewForm } from '../Review-form/review-form';

export function ReviewListItem({ review }) {
    const [isEdit, changeEditState] = useState(false);
    const { user: currentUser } = use(UserContext);
    const [editReview, { isLoading }] = useEditReviewMutation();

    let { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return {
                ...result,
                data: result.data?.find((user) => user.id === review.userId)
            }
        }
    });

    const onChangeEditState = () => {
        changeEditState(!isEdit);
    }

    const handleEdit = (currentReview) => {
        editReview({ reviewId: review.id, review: currentReview });
        onChangeEditState();
    }

    if (!user) {
        if (review.userId === currentUser.id) {
            user = currentUser;
        } else {
            return;
        }
    }

    const { text } = review;
    const { name } = user;

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
                    <div>"<i>{text}</i>", - {name}</div>
                </div>
                {
                    user === currentUser && <Button onClickHandler={onChangeEditState}>Edit</Button>
                }
            </div>
            {
                user === currentUser && isEdit && review &&
                <div className={styles.reviewItem__form}>
                    <ReviewForm review={review} user={user} onSubmit={handleEdit} isSubmitButtonDisabled={isLoading} />
                </div>
            }

        </li>
    );
}