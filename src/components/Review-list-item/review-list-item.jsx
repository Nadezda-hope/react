import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { getUsers } from '../../redux/entities/users/get-users';
import { selectUserById } from '../../redux/entities/users/slice';
import { useRequest } from '../../redux/hooks/use-request';

export function ReviewListItem({ id }) {
    const review = useSelector((state) => selectReviewById(state, id));
    const requestStatus = useRequest(getUsers);
    const user = useSelector((state) => selectUserById(state, review.userId));

    if (!user) {
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