import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getReviews } from '../../redux/entities/reviews/get-reviews';
import { selectReviewsIds } from '../../redux/entities/reviews/slice';
import { useRequest } from '../../redux/hooks/use-request';
import { Loader } from '../Loader/loader';
import { ReviewListItem } from '../Review-list-item/review-list-item';
import styles from './review-list.module.scss';

export function ReviewList() {
    const { restaurantId } = useOutletContext();
    const requestStatus = useRequest(getReviews, restaurantId);
    const reviews = useSelector((state) => selectReviewsIds(state, restaurantId));

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return (
            <Loader />
        )
    }

    if (requestStatus === REJECTED) {
        return (
            <div>Something went wrong</div>
        );
    }

    return (
        <ul className={styles.reviews}>
            {
                reviews.map((id) => (
                    <ReviewListItem key={id} id={id} />
                ))
            }
        </ul>
    )
}