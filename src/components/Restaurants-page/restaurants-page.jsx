import { restaurants } from '../../../material/mock';
import { Tab } from '../Tab/tab';
import { RestaurantCard } from '../Restaurant-card/restaurant-card';
import { useState } from 'react';

export function RestaurantsPage() {
    const [activeTabId, setActiveTab] = useState(restaurants[0].id);

    const onClickHandler = (id) => {
        if (activeTabId === id) {
            return;
        }

        setActiveTab(id);
    };

    const activeRestaurantCard = restaurants.find(
        (restaurant) => restaurant.id === activeTabId
    );

    return (
        <div>
            {
                restaurants.map((restaurant) => (
                    <Tab
                        key={restaurant.name}
                        title={restaurant.name}
                        onClick={() => onClickHandler(restaurant.id)}
                    />
                ))
            }
            <RestaurantCard
                key={activeRestaurantCard.id}
                restaurant={activeRestaurantCard}
            />
        </div>
    );
}