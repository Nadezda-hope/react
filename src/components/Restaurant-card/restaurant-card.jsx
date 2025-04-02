import classNames from 'classnames';
import { use } from 'react';
import { Outlet } from 'react-router';
import { ReviewForm } from '../Review-form/review-form';
import { Tab } from '../Tab/tab';
import { UserContext } from '../User-context';
import styles from './restaurant-card.module.scss';

export function RestaurantCard({ id, name }) {
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
                    <Outlet context={{ restaurantId: id }} />
                </div>
            </div>
            {
                user && <ReviewForm />
            }
        </section>
    );
}
