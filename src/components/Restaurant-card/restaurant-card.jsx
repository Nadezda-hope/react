'use client';

import { addReviewAction } from '@/actions/add-review-action';
import classNames from 'classnames';
import { use, useCallback } from 'react';
import { ReviewForm } from '../Review-form/review-form';
import { Tab } from '../Tab/tab';
import { UserContext } from '../User-context';
import styles from './restaurant-card.module.scss';

export function RestaurantCard({ children, id, name, img }) {
    const { user } = use(UserContext);

    const handleAddReview = useCallback(
        async (state, formData) => {
            if (formData === null) {
                return {
                    text: '',
                    rating: 5
                };
            }

            const text = formData.get('text');
            const rating = formData.get('rating');

            const review = { text, rating };

            await addReviewAction({ id, review });

            return {
                text: '',
                rating: 5
            };
        },
        [id]
    );

    return (
        <section className={styles.restaurantCard}>
            <h3 className={styles.restaurantCard__title}>{name}</h3>
            <div className={styles.restaurantCard__container}>
                <div className={classNames(styles.restaurantCard__wrap, {
                    [styles.withForm]: user
                })}>
                    <div className={styles.restaurantCard__tabs}>
                        <Tab link={`/restaurants/${id}/menu`} title={'MENU'}></Tab>
                        <Tab link={`/restaurants/${id}/reviews`} title={'REVIEW'}></Tab>
                    </div>

                    <div className={styles.restaurantCard__container}>
                        {children}
                    </div>
                </div>
                <div className={styles.restaurantCard__imgWrap}>
                    <img width={200} height={150} className={styles.restaurantCard__img} src={img} />
                </div>
            </div>
            {
                user && <ReviewForm submitFormAction={handleAddReview} />
            }
        </section>
    );
}
