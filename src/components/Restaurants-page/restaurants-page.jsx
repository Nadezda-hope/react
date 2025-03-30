// import { restaurants } from '../../../material/mock';
import { Tab } from '../Tab/tab';
import { RestaurantCard } from '../Restaurant-card/restaurant-card';
import { useState, use } from 'react';
import styles from './restaurants-page.module.scss';
import classNames from 'classnames';
import { ThemeContext } from '../Theme-context';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { RestaurantCardContainer } from '../Restaurant-card/restaurant-card-container';
import { TabContainer } from '../Tab/tab-container';

export function RestaurantsPage() {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [activeTabId, setActiveTabId] = useState(restaurantIds[0]);
    const { theme } = use(ThemeContext);


    const onClickHandler = (id) => {
        if (activeTabId === id) {
            return;
        }

        setActiveTabId(id);
    };

    return (
        <div className={classNames(
            styles.restaurantsPage, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}>
            <div className={styles.restaurantsPage__tabs}>
                {
                    restaurantIds.map((id) => (
                        <TabContainer key={id} id={id} onClick={() => onClickHandler(id)} isActive={id === activeTabId} />
                    ))
                }
            </div>
            <div className={styles.restaurantsPage__content}>
                <RestaurantCardContainer key={activeTabId} id={activeTabId} />
            </div>
        </div>
    );
}