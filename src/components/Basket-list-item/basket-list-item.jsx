import { useGetDishQuery } from '../../redux/services/api-service';
import { State } from '../State/state';
import styles from './basket-list-item.module.scss';

export function BasketListItem({ id, amount }) {
    const { data: dish, isLoading, isError } = useGetDishQuery(id);

    return (
        <State isLoading={isLoading} isError={isError}>
            {
                dish && <li className={styles.basketListItem}>{dish.name} - <b>{amount}</b></li>
            }
        </State>
    );
}