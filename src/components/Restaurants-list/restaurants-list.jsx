import classNames from 'classnames';
import { use } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { useRequest } from '../../redux/hooks/use-request';
import { RestaurantsTabsContainer } from '../Restaurants-tabs/restaurants-tabs-container';
import { State } from '../State/state';
import { ThemeContext } from '../Theme-context';
import styles from './restaurants-list.module.scss';

export function RestaurantsList() {
    const requestStatus = useRequest(getRestaurants);
    const restaurantIds = useSelector(selectRestaurantIds);
    const { theme } = use(ThemeContext);

    return (
        <State state={requestStatus}>
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
        </State>
    );
}