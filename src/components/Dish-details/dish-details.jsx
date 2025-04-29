import { getDishById } from '../../services/get-dish-by-id';
import { MenuItemCounter } from '../Menu-item-counter/menu-item-counter';
import styles from './dish-details.module.scss';

export async function DishDetails({ dishId }) {
    const data = await getDishById(dishId);

    if (!data) {
        return null;
    }

    return (
        <div className={styles.dishDetails}>
            <div className={styles.dishDetails__container}>
                <div>
                    <h4 className={styles.dishDetails__name}>{data.name}</h4>
                    {
                        data.ingredients.map((ingredient) => ingredient).join(' ')
                    }
                    {
                        <div className={styles.dishDetails__price}>{data.price} $</div>
                    }
                </div>

                <div className={styles.dishDetails__counter}>
                    <MenuItemCounter id={dishId} />
                </div>
            </div>
        </div>
    )
}