import { use } from 'react';
import { MenuList } from '../Menu-list/menu-list';
import { ReviewList } from '../Review/review-list';
import { ReviewForm } from '../Review-form/review-form';
import styles from './restaurant-card.module.scss';
import { UserContext } from '../User-context';
import classNames from 'classnames';

export function RestaurantCard({ restaurant }) {
    const { user } = use(UserContext);


    return (
        <section className={styles.restaurantCard}>
            <h3 className={styles.restaurantCard__title}>{restaurant.name}</h3>
            <div className={classNames(styles.restaurantCard__container, {
                [styles.withForm]: user
            })}>
                <div className={styles.restaurantCard__block}>
                    {
                        restaurant.menu.length ? (
                            <>
                                <h4 className={styles.restaurantCard__subtitle}>Menu</h4>
                                <MenuList menu={restaurant.menu} />
                            </>
                        ) : null
                    }
                </div>
                <div className={styles.restaurantCard__block}>
                    {
                        restaurant.reviews.length ? (
                            <>
                                <h4 className={styles.restaurantCard__subtitle}>Review</h4>
                                <ReviewList reviews={restaurant.reviews} />
                            </>
                        ) : null
                    }
                </div>
            </div>
            {
                user && <ReviewForm />
            }

        </section>
    );
}
