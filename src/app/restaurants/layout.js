export const dynamic = "force-dynamic";

import { Suspense } from 'react';
import { RestaurantsList } from '@/components/Restaurants-list/restaurants-list';
import { Loader } from '@/components/Loader/loader';

export default function RestaurantsLayout({ children }) {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <RestaurantsList />
            </Suspense>
            {children}
        </>
    )
}