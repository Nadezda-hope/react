import { getReviews } from '../../services/get-reviews';
import { getUsers } from '../../services/get-users';
import { ReviewListItem } from '../Review-list-item/review-list-item';
import styles from './review-list.module.scss';

export async function ReviewList({ restaurantId }) {
    const reviewPromise = getReviews(restaurantId);
    const usersPromise = getUsers();

    const [reviewData, usersData] = await Promise.all([reviewPromise, usersPromise]);

    if (!reviewData && !usersData) {
        return null;
    }

    return (
        <ul className={styles.reviews}>
            {
                reviewData.map((review) => {
                    const reviewUser = usersData.find((user) => review.userId === user.id);

                    return <ReviewListItem key={review.id} review={review} user={reviewUser} restaurantId={restaurantId} />
                })
            }
        </ul>
    )
}