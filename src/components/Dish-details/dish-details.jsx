import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { MenuItemCounter } from '../Menu-item-counter/menu-item-counter';
import styles from './dish-details.module.scss';

export function DishDetails({ dishId }) {
    const { name, price, ingredients } = useSelector((state) => selectDishById(state, dishId));

    return (
        <div className={styles.dishDetails}>
            <div className={styles.dishDetails__container}>
                <div>
                    <h4 className={styles.dishDetails__name}>{name}</h4>
                    {
                        ingredients.map((ingredient) => ingredient).join(' ')
                    }
                    {
                        <div className={styles.dishDetails__price}>{price} $</div>
                    }
                </div>

                <div className={styles.dishDetails__counter}>
                    <MenuItemCounter id={dishId} />
                </div>
            </div>
        </div>
    )
}