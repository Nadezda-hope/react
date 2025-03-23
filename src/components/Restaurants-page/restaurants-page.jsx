import { restaurants } from '../../../material/mock';
import { Tab } from '../Tab/tab';
import { RestaurantCard } from '../Restaurant-card/restaurant-card';
import { useState, use } from 'react';
import styles from './restaurants-page.module.scss';
import classNames from 'classnames';
import { ThemeContext } from '../Theme-context';

export function RestaurantsPage() {
    const [activeTabId, setActiveTabId] = useState(restaurants[0].id);
    const { theme } = use(ThemeContext);


    const onClickHandler = (id) => {
        if (activeTabId === id) {
            return;
        }

        setActiveTabId(id);
    };

    const activeRestaurantCard = restaurants.find(
        (restaurant) => restaurant.id === activeTabId
    );

    return (
        <div className={classNames(
            styles.restaurantsPage, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}>
            <div className={styles.restaurantsPage__tabs}>
                {
                    restaurants.map((restaurant) => (
                        <Tab
                            key={restaurant.name}
                            title={restaurant.name}
                            onClick={() => onClickHandler(restaurant.id)}
                            isActive={restaurant.id === activeTabId}
                        />
                    ))
                }
            </div>
            <div className={styles.restaurantsPage__content}>
                <RestaurantCard
                    key={activeRestaurantCard.id}
                    restaurant={activeRestaurantCard}
                />
                <RestaurantCard
                    key={activeRestaurantCard.id + 1}
                    restaurant={activeRestaurantCard}
                />
                <RestaurantCard
                    key={activeRestaurantCard.id + 2}
                    restaurant={activeRestaurantCard}
                />
                <RestaurantCard
                    key={activeRestaurantCard.id + 3}
                    restaurant={activeRestaurantCard}
                />
                <RestaurantCard
                    key={activeRestaurantCard.id + 4}
                    restaurant={activeRestaurantCard}
                />
                <RestaurantCard
                    key={activeRestaurantCard.id + 5}
                    restaurant={activeRestaurantCard}
                />
            </div>
        </div>
    );
}