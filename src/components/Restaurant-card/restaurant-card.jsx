import { MenuItem } from '../Menu-item/menu-item';
import { MenuList } from '../Menu-list/menu-list';
import { ReviewList } from '../Review/review-list';

export function RestaurantCard({ restaurant }) {
    return (
        <section>
            <h2>{restaurant.name}</h2>
            {
                restaurant.menu.length ? (
                    <>
                        <h3>Menu</h3>
                        <MenuList menu={restaurant.menu} />
                    </>
                ) : null
            }
            {
                restaurant.reviews.length ? (
                    <>
                        <h3>Review</h3>
                        <ReviewList reviews={restaurant.reviews} />
                    </>
                ) : null
            }
        </section>
    );
}
