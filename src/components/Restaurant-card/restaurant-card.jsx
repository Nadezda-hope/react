import { use } from 'react';
import { MenuList } from '../Menu-list/menu-list';
import { ReviewList } from '../Review-list/review-list';
import { ReviewForm } from '../Review-form/review-form';
import styles from './restaurant-card.module.scss';
import { UserContext } from '../User-context';
import classNames from 'classnames';
import { Basket } from '../Basket/basket';

export function RestaurantCard({ name, menuIds, reviewsIds }) {
    const { user } = use(UserContext);

    return (
        <section className={styles.restaurantCard}>
            <h3 className={styles.restaurantCard__title}>{name}</h3>
            <div className={classNames(styles.restaurantCard__wrap, {
                [styles.withForm]: user
            })}>
                <div className={styles.restaurantCard__container}>
                    <div className={styles.restaurantCard__block}>
                        {
                            menuIds.length ? (
                                <>
                                    <h4 className={styles.restaurantCard__subtitle}>Menu</h4>
                                    <MenuList menuIds={menuIds} />
                                </>
                            ) : null
                        }
                    </div>
                    <div className={styles.restaurantCard__block}>
                        {
                            reviewsIds.length ? (
                                <>
                                    <h4 className={styles.restaurantCard__subtitle}>Review</h4>
                                    <ReviewList reviewsIds={reviewsIds} />
                                </>
                            ) : null
                        }
                    </div>


                </div>
                <Basket />
            </div>
            {
                user && <ReviewForm />
            }

        </section>
    );
}
