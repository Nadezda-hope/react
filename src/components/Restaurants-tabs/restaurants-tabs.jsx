'use client';

import classNames from 'classnames';
import { use } from 'react';
import { Tab } from '../Tab/tab';
import { ThemeContext } from '../Theme-context';
import styles from './restaurants-tabs.module.scss';

export function RestaurantsTabs({ data }) {
    const { theme } = use(ThemeContext);

    return (
        <div className={classNames(
            styles.restaurantsTabs, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}>
            <div className={styles.restaurantsTabs__tabs}>
                {
                    data?.map((item) => (
                        <Tab
                            key={item.id}
                            link={`/restaurants/${item.id}`}
                            title={item.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}