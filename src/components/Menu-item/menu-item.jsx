import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { MenuItemCounter } from '../Menu-item-counter/menu-item-counter';
import styles from './menu-item.module.scss';

export function MenuItem({ id }) {
    const dish = useSelector((state) => selectDishById(state, id))
    const { name, ingredients, price } = dish;

    if (!dish) {
        return;
    }

    return (
        <li className={styles.menuItem}>
            <h4 className={styles.menuItem__name}>{name}</h4>
            {
                ingredients.map((ingredient) => ingredient).join(' ')
            }
            {
                <div className={styles.menuItem__price}>{price} $</div>
            }
            <MenuItemCounter id={id} />
        </li>
    )
}