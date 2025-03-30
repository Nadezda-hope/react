import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import styles from './basket-entity.module.scss';

export function BasketEntity({ id, amount }) {
    const dish = useSelector((state) => selectDishById(state, id));

    const { name } = dish;

    if (!dish) {
        return;
    }

    return (
        <li className={styles.basketEntity}>{name} - <b>{amount}</b></li>
    );
}