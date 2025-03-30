import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectDishById } from '../../redux/entities/dishes/slice';
import styles from './dish-details.module.scss';
import { addToBasket, removeFromBasket, selectCountByDishId } from '../../redux/entities/basket/slice';
import { use, useCallback } from 'react';
import { UserContext } from '../User-context';
import { Counter } from '../Counter/counter';
import { Button } from '../Button/button';

export function DishDetails() {
    const { dishId } = useParams(0);
    const dispatsh = useDispatch();
    const count = useSelector((state) => selectCountByDishId(state, dishId)) || 0;
    const { name, price, ingredients } = useSelector((state) => selectDishById(state, dishId));
    const { user } = use(UserContext);

    const increment = useCallback(
        () => dispatsh(addToBasket(dishId)),
        [dispatsh, dishId]
    );

    const decrement = useCallback(
        () => dispatsh(removeFromBasket(dishId)),
        [dispatsh, dishId]
    );

    const goBack = () => {
        history.back();
    }

    return (
        <div className={styles.dishDetails}>
            <Button className={styles.dishDetails__back} onClickHandler={goBack}>
                Back
            </Button>
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
                {
                    user && (
                        <div className={styles.dishDetails__counter}>
                            <Counter increment={increment} decrement={decrement}>
                                {count}
                            </Counter>
                        </div>
                    )
                }
            </div>
        </div>
    )
}