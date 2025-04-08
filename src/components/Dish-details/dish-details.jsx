import { useGetDishQuery } from '../../redux/services/api-service';
import { MenuItemCounter } from '../Menu-item-counter/menu-item-counter';
import { State } from '../State/state';
import styles from './dish-details.module.scss';

export function DishDetails({ dishId }) {
    const { data, isLoading, isError } = useGetDishQuery(dishId);

    return (
        <State isLoading={isLoading} isError={isError}>
            {
                data &&
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
            }
        </State>

    )
}