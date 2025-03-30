import { useParams } from 'react-router';
import { ReviewItem } from '../Review-item/review-item';
import styles from './review-list.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';

export function ReviewList() {
    const { restaurantId } = useParams();
    const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!reviews) {
        return;
    };

    return (
        <ul className={styles.reviews}>
            {
                reviews.map((id) => (
                    <ReviewItem key={id} id={id} />
                ))
            }
        </ul>
    )
}