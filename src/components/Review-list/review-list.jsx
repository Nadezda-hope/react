import { ReviewListItem } from '../Review-list-item/review-list-item';
import styles from './review-list.module.scss';

export function ReviewList({ reviewsIds }) {
    return (
        <ul className={styles.reviews}>
            {
                reviewsIds.map((id) => (
                    <ReviewListItem key={id} id={id} />
                ))
            }
        </ul>
    )
}