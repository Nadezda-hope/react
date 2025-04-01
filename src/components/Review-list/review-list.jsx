import { useParams } from 'react-router';
import { ReviewListItem } from '../Review-list-item/review-list-item';
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
                    <ReviewListItem key={id} id={id} />
                ))
            }
        </ul>
    )
}