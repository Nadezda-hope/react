import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectDishById } from '../../redux/entities/dishes/slice';
import styles from './menu-item.module.scss';

export function MenuItem({ id }) {
    const dish = useSelector((state) => selectDishById(state, id))

    if (!dish) {
        return;
    };

    const { name } = dish;

    return (
        <Link className={styles.menuItem} to={`/dish/${id}`}>
            <div>
                <h4>{name}</h4>
            </div>
        </Link>
    )
}