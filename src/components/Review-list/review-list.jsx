import { useOutletContext } from 'react-router';
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from '../../redux/services/api-service';
import { ReviewListItem } from '../Review-list-item/review-list-item';
import { State } from '../State/state';
import styles from './review-list.module.scss';

export function ReviewList() {
    const { restaurantId } = useOutletContext();

    const {
        data: reviewData,
        isLoading: isReviewLoading,
        isError: isReviewError
    } = useGetReviewsByRestaurantIdQuery(restaurantId);

    const {
        data: usersData,
        isLoading: isUsersLoading,
        isError: isUsersError
    } = useGetUsersQuery();

    if ((isReviewLoading || isUsersLoading) || (isReviewError || isUsersError)) {
        return <State isLoading={isReviewLoading || isUsersLoading} isError={isReviewError || isUsersError} />
    }

    if (!reviewData && !usersData) {
        return null;
    }

    return (
        <ul className={styles.reviews}>
            {
                reviewData.map((review) => (
                    <ReviewListItem key={review.id} review={review} />
                ))
            }
        </ul>
    )
}