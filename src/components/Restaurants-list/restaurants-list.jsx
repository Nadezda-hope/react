import classNames from 'classnames';
import { use } from 'react';
import { useGetRestaurantsQuery } from '../../redux/services/api-service';
import { State } from '../State/state';
import { Tab } from '../Tab/tab';
import { ThemeContext } from '../Theme-context';
import styles from './restaurants-list.module.scss';
import { Outlet } from 'react-router';

export function RestaurantsList() {
    const { data, isLodaing, isError } = useGetRestaurantsQuery();
    const { theme } = use(ThemeContext);

    if (isLodaing || isError) {
        return <State isLoading={isLodaing} isError={isError} />
    }

    if (!data) {
        return null;
    }

    return (
        <div className={classNames(
            styles.restaurantsList, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}>
            <div className={styles.restaurantsList__tabs}>
                {
                    data?.map((item) => (
                        <Tab
                            key={item.id}
                            link={item.id}
                            title={item.name}
                        />
                    ))
                }
            </div>
            <div className={styles.restaurantsList__content}>
                <Outlet />
            </div>
        </div>
    )
}