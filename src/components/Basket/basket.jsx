import { useSelector } from 'react-redux';
import styles from './basket.module.scss';
import { selectDishItems } from '../../redux/entities/basket/slice';
import { BasketEntity } from '../Basket-entity/basket-entity';

export function Basket() {
    const items = useSelector(selectDishItems);

    return (
        <div className={styles.basket}>
            <h4 className={styles.basket__title}>Basket</h4>
            <ul className={styles.basket__list}>
                {

                    items.map(({ id, amount }) => (
                        <BasketEntity key={id} id={id} amount={amount} />
                    ))
                }
            </ul>
        </div>
    );
}