import classNames from 'classnames';
import { use } from 'react';
import { MenuList } from '../Menu-list/menu-list';
import { ReviewForm } from '../Review-form/review-form';
import { ReviewList } from '../Review-list/review-list';
import { UserContext } from '../User-context';
import styles from './restaurant-card.module.scss';
import { Tab } from '../Tab/tab';
import { Outlet } from 'react-router';

export function RestaurantCard({ name, menuIds, reviewsIds }) {
    const { user } = use(UserContext);

    return (
        <section className={styles.restaurantCard}>
            <h3 className={styles.restaurantCard__title}>{name}</h3>
            <div className={classNames(styles.restaurantCard__wrap, {
                [styles.withForm]: user
            })}>
                <div className={styles.restaurantCard__tabs}>
                    <Tab link={'menu'} title={'MENU'}></Tab>
                    <Tab link={'reviews'} title={'REVIEW'}></Tab>
                </div>

                <div className={styles.restaurantCard__container}>
                    <Outlet />
                </div>
            </div>
            {
                user && <ReviewForm />
            }
        </section>
    );
}
