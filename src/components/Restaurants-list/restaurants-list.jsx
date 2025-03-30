import classNames from 'classnames';
import { use, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { RestaurantCardContainer } from '../Restaurant-card/restaurant-card-container';
import { RestaurantsTabsContainer } from '../Restaurants-tabs/restaurants-tabs-container';
import { ThemeContext } from '../Theme-context';
import styles from './restaurants-list.module.scss';
import { Outlet } from 'react-router';

export function RestaurantsList() {
    const restaurantIds = useSelector(selectRestaurantIds);
    const { theme } = use(ThemeContext);

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