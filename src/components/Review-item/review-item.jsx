import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/users/slice';

export function ReviewItem({ id }) {
    const review = useSelector((state) => selectReviewById(state, id));
    const user = useSelector((state) => selectUserById(state, review.userId));

    if (!review && !user) {
        return;
    }

    const { text } = review;
    const { name } = user;

    return (
        <li>
            "<i>{text}</i>", - {name}
        </li>
    );
}