import classNames from 'classnames';
import { use } from 'react';
import { Outlet } from 'react-router';
import { ReviewForm } from '../Review-form/review-form';
import { Tab } from '../Tab/tab';
import { UserContext } from '../User-context';
import styles from './restaurant-card.module.scss';
import { useAddReviewMutation } from '../../redux/services/api-service';

export function RestaurantCard({ id, name, img }) {
    const { user } = use(UserContext);
    const [addReview, { isLoading }] = useAddReviewMutation();

    const handleSubmit = (review) => {
        addReview({ restaurantId: id, review })
    }

    return (
        <section className={styles.restaurantCard}>
            <h3 className={styles.restaurantCard__title}>{name}</h3>
            <div className={styles.restaurantCard__container}>
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
                <div className={styles.restaurantCard__imgWrap}>
                    <img width={200} height={150} className={styles.restaurantCard__img} src={img} />
                </div>
            </div>
            {
                user && <ReviewForm user={user} onSubmit={handleSubmit} isSubmitButtonDisabled={isLoading} />
            }
        </section>
    );
}
