import { DishDetails } from '@/components/Dish-details/dish-details';
import { Loader } from '@/components/Loader/loader';
import { Suspense } from 'react';

export default async function DishPageContainer({ params }) {
    const { dishId } = await params;

    return (
        <Suspense fallback={<Loader />}>
            <DishDetails dishId={dishId} />
        </Suspense>
    )
}
