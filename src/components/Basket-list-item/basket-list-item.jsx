import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import styles from './basket-list-item.module.scss';

export function BasketListItem({ id, amount }) {
    const dish = useSelector((state) => selectDishById(state, id));

    const { name } = dish;

    if (!dish) {
        return;
    }

    return (
        <li className={styles.basketListItem}>{name} - <b>{amount}</b></li>
    );
}