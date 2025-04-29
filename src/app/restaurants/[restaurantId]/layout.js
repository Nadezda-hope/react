import { Loader } from '@/components/Loader/loader';
import { RestaurantPage } from '@/components/pages/Restaurant-page/restaurant-page';
import { getRestaurantById } from '@/services/get-restaurant-by-id';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
    const { restaurantId } = await params;
    const restaurant = await getRestaurantById(restaurantId);

    return {
        title: restaurant.name
    }

}

export default async function RestaurantPageLayout({ children, params }) {
    const { restaurantId } = await params;

    return (
        <Suspense fallback={<Loader />}>
            <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>;
        </Suspense>
    )
};
