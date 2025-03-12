import { useState } from 'react';
import { RestaurantCard } from '../Restaurant-card/restaurant-card';
import { Tab } from '../Tab/tab';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

export function Layout({ restaurants }) {
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
            <Header />
            {restaurants.map((restaurant) => (
                <Tab
                    key={restaurant.name}
                    title={restaurant.name}
                    cb={() => onClickHandler(restaurant.id)}
                />
            ))}
            {
                <RestaurantCard
                    key={activeRestaurantCard.id}
                    restaurant={activeRestaurantCard}
                />
            }
            <Footer />
        </div>
    );
}
