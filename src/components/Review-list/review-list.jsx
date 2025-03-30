import { ReviewItem } from '../Review-item/review-item';
import styles from './review-list.module.scss';

export function ReviewList({ reviewsIds }) {
    return (
        <ul className={styles.reviews}>
            {
                reviewsIds.map((id) => (
                    <ReviewItem key={id} id={id} />
                ))
            }
        </ul>
    )
}