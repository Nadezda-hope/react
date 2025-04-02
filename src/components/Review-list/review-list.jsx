import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { ReviewListItem } from '../Review-list-item/review-list-item';
import styles from './review-list.module.scss';

export function ReviewList() {
    const { restaurantId } = useOutletContext();
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