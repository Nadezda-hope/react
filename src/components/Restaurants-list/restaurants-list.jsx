import classNames from 'classnames';
import { use } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { useRequest } from '../../redux/hooks/use-request';
import { Loader } from '../Loader/loader';
import { RestaurantsTabsContainer } from '../Restaurants-tabs/restaurants-tabs-container';
import { ThemeContext } from '../Theme-context';
import styles from './restaurants-list.module.scss';

export function RestaurantsList() {
    const requestStatus = useRequest(getRestaurants);

    const restaurantIds = useSelector(selectRestaurantIds);
    const { theme } = use(ThemeContext);

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return (
            <Loader />
        )
    }

    if (requestStatus === REJECTED) {
        return (
            <div className={styles.restaurantsList}>Something went wrong</div>
        );
    }

    return (
        <div className={classNames(
            styles.restaurantsList, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}>
            <div className={styles.restaurantsList__tabs}>
                {
                    restaurantIds.map((id) => (
                        <RestaurantsTabsContainer key={id} id={id} />
                    ))
                }
            </div>
            <div className={styles.restaurantsList__content}>
                <Outlet />
            </div>
        </div>
    );
}